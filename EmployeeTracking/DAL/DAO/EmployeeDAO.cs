using DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class EmployeeDAO : EmployeeContext
    {
        public static void AddEmployee(Employee employee)
        {
			try
			{
				db.Employees.InsertOnSubmit(employee);
				db.SubmitChanges();
			}
			catch (Exception ex)
			{

				throw ex;
			}
        }

        public static void DeleteEmployee(int employeeID)
        {
            try
            {
                Employee e = db.Employees.First(x => x.ID == employeeID);
                db.Employees.DeleteOnSubmit(e);
                db.SubmitChanges();

                //List<Task> tasks=db.Tasks.Where(x=>x.EmployeeID == employeeID).ToList();
                //db.Tasks.DeleteAllOnSubmit(tasks);
                //db.SubmitChanges();

                //List<Salary> salary=db.Salaries.Where(x=>x.EmployeeID==employeeID).ToList();
                //db.Salaries.DeleteAllOnSubmit(salary);
                //db.SubmitChanges();

                //List<Permission> permission = db.Permissions.Where(x => x.EmployeeID == employeeID).ToList();
                //db.Permissions.DeleteAllOnSubmit(permission);
                //db.SubmitChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static List<EmployeeDetailDTO> GetEmployees()
        {
            List<EmployeeDetailDTO> employeesList = new List<EmployeeDetailDTO>();
            var list = (from e in db.Employees
                        join d in db.Departments on e.DepartmentID equals d.ID
                        join p in db.Positions on e.PositionID equals p.ID
                        select new
                        {
                            UserNo = e.UserNo,
                            Name = e.Name,
                            Surname = e.Surname,
                            EmployeeID = e.ID,
                            Password = e.Password,
                            DepartmentID = e.DepartmentID,
                            DepartmentName=d.DepartmentName,
                            PositionID = e.PositionID,
                            PositionName=p.PositionName,
                            isAdmin = e.isAdmin,
                            Salary = e.Salary,
                            ImagePath = e.ImagePath,
                            BirthDay = e.BirthDay,
                            Address = e.Address,


                        }
                      ).OrderBy(x => x.UserNo).ToList();

            foreach (var item in list)
            {
                EmployeeDetailDTO dto = new EmployeeDetailDTO();
                dto.Name= item.Name;
                dto.UserNo = item.UserNo;
                dto.Surname=item.Surname;
                dto.EmployeeID = item.EmployeeID;
                dto.Password = item.Password;
                dto.DepartmentID = item.DepartmentID;
                dto.DepartmentName = item.DepartmentName;
                dto.PositionID = item.PositionID;
                dto.PositionName = item.PositionName;
                dto.Address = item.Address;
                dto.BirthDay = item.BirthDay;
                dto.ImagePath = item.ImagePath;
                dto.isAdmin = item.isAdmin;
                dto.Salary = item.Salary;
                employeesList.Add(dto);

            }
            return employeesList;
        }

        public static List<Employee> GetEmployees(int v, string text)
        {
            try
            {
                List<Employee> list = db.Employees.Where(x => x.UserNo == v && x.Password == text).ToList();
                return list;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static List<Employee> GetUsers(int v)
        {
            return db.Employees.Where(x=>x.UserNo == v).ToList();
        }

        public static void UpdateEmployee(int employeeID, int amount)
        {
            try
            {
                Employee employee = db.Employees.First(x => x.ID == employeeID);
                employee.Salary = amount;
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static void UpdateEmployee(Employee employee)
        {
            try
            {
                Employee emp = db.Employees.First(x => x.ID == employee.ID);
                emp.UserNo = employee.UserNo;
                emp.Name = employee.Name;
                emp.Surname = employee.Surname;
                emp.Password = employee.Password;
                emp.isAdmin=employee.isAdmin;
                emp.BirthDay = employee.BirthDay;
                emp.Address = employee.Address;
                emp.DepartmentID = employee.DepartmentID;
                emp.PositionID = employee.PositionID;
                emp.Salary = employee.Salary;
                emp.ImagePath=employee.ImagePath;
                db.SubmitChanges();

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static void UpdateEmployee(Position position)
        {
            List<Employee> list = db.Employees.Where(x => x.PositionID == position.ID).ToList();
            foreach (var item in list)
            {
                item.DepartmentID = position.DepartmentID;
            }
            db.SubmitChanges();
        }

    }
}

