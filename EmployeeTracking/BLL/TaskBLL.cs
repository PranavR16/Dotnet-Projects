using DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DAL;
using DAL.DAO;
namespace BLL
{
    public class TaskBLL
    {
        public static void AddTask(Task task)
        {
            TaskDAO.AddTask(task);
        }

        public static void ApprovedTask(int taskID, bool isAdmin)
        {
            TaskDAO.ApprovedTask(taskID,isAdmin);
        }

        public static void DeleteTask(int taskID)
        {
            TaskDAO.DeleteTask(taskID);
        }

        public static TaskDTO GetAll()
        {
            TaskDTO taskDTO = new TaskDTO();
            taskDTO.Employees = EmployeeDAO.GetEmployees();
            taskDTO.Departments=DepartmentDAO.GetDeaprtments();
            taskDTO.Positions = PositionDAO.GetPositions();
            taskDTO.TaskStates=TaskDAO.GetTaskStates();
            taskDTO.Tasks = TaskDAO.GetTask();
            return taskDTO;
        }

        public static void UpdateTask(Task task)
        {
            TaskDAO.UpdateTask(task);
        }
    }
}
