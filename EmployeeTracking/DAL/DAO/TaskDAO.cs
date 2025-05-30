using DAL.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class TaskDAO : EmployeeContext
    {
        public static void AddTask(Task task)
        {
            try
            {
                db.Tasks.InsertOnSubmit(task);
                db.SubmitChanges();
            }
            catch (Exception EX)
            {

                throw EX;
            }
        }

        public static void ApprovedTask(int taskID, bool isAdmin)
        {
            try
            {
                Task tsk = db.Tasks.First(x => x.ID == taskID);
                if (isAdmin)
                    tsk.TaskState=TaskStates.Approved;
                else
                    tsk.TaskState=TaskStates.Delivered;
                tsk.TaskDeliveryDate=DateTime.Today;
                db.SubmitChanges();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static void DeleteTask(int taskID)
        {
            try
            {
                Task ts = db.Tasks.First(x => x.ID == taskID);
                db.Tasks.DeleteOnSubmit(ts);
                db.SubmitChanges();
            }
            catch (Exception)
            {

                throw;
            }
;
        }

        public static List<TaskDetailDTO> GetTask()
        {
            List<TaskDetailDTO> taskList = new List<TaskDetailDTO>();   
            var list=(from t in db.Tasks
                      join s in db.TaskStates on t.TaskState equals s.ID 
                      join e in db.Employees on t.EmployeeID equals e.ID
                      join d in db.Departments on e.DepartmentID equals d.ID
                      join p in db.Positions on e.PositionID equals p.ID
                      select new
                      {
                          taskID = t.ID,
                          title=t.TaskTitle,
                          content=t.TaskContent,
                          startdate=t.TaskStartDate,
                          deliveryDate=t.TaskDeliveryDate,
                          taskStateName=s.StateName,
                          taskStateId=t.TaskState,
                          UserNo=e.UserNo,
                          Name=e.Name,
                          EmployeeId=t.EmployeeID,
                          Surname=e.Surname,
                          positionName=p.PositionName,
                          departmentName=d.DepartmentName,
                          positionID=e.PositionID,
                          departmentId=e.DepartmentID


                      }).OrderBy(x => x.startdate).ToList();
            foreach (var item in list)
            {
                TaskDetailDTO dto = new TaskDetailDTO();  
                dto.TaskID=item.taskID;
                dto.Title=item.title;
                dto.Content=item.content;
                dto.TaskStartdate=item.startdate;
                dto.TaskDeliverydate=item.deliveryDate;
                dto.TaskStateName=item.taskStateName;
                dto.TaskStateID=item.taskStateId;
                dto.UserNo=item.UserNo;
                dto.Name=item.Name;
                dto.Surname=item.Surname;
                dto.DepartmentName=item.departmentName;
                dto.PositionID=item.positionID;
                dto.PositionName=item.positionName;
                dto.EmployeeID=item.EmployeeId;
                taskList.Add(dto);
            }

            return taskList;
        }

        public static List<TaskState> GetTaskStates()
        {
            return db.TaskStates.ToList();
        }

        public static void UpdateTask(Task task)
        {
            try
            {
                Task ts = db.Tasks.First(x => x.ID == task.ID);
                ts.TaskTitle=task.TaskTitle;
                ts.TaskContent=task.TaskContent;
                ts.TaskState=task.TaskState;
                ts.EmployeeID=task.EmployeeID;
                db.SubmitChanges();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
