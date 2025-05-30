using DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class SalaryDAO : EmployeeContext
    {
        public static List<Month> GetMonths()
        {
            return db.Months.ToList();
        }
        public static void AddSalary(Salary salary)
        {
            try
            {
                db.Salaries.InsertOnSubmit(salary);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public static List<SalaryDetailDTO> GetSalaries()
        {
            List<SalaryDetailDTO> salaryList= new List<SalaryDetailDTO>();
            var list=(from s in db.Salaries 
                      join e in db.Employees on s.EmployeeID equals e.ID
                      join m in db.Months on s.MonthID equals m.ID
                      select new
                      {
                        userNo=e.UserNo,
                        name=e.Name,
                        surname=e.Surname,
                        employeeID=s.EmployeeID,
                        amount=s.Amount,
                        year=s.Year,
                        monthname=m.MonthName,
                        monthId=s.MonthID,
                        salaryID=s.ID,
                        departmentID=e.DepartmentID,
                        positionID=e.PositionID,


                      }
                      ).OrderBy(x=>x.year).ToList();
            foreach (var item in list)
            {
                SalaryDetailDTO dto=new SalaryDetailDTO();
                dto.UserNo = item.userNo;
                dto.Name=item.name;
                dto.Surname=item.surname;
                dto.EmployeeID=item.employeeID;
                dto.SalaryID=item.salaryID;
                dto.SalaryAmount=item.amount;
                dto.SalaryYear=item.year;
                dto.MonthName=item.monthname;
                dto.MonthID=item.monthId;
                dto.SalaryID= item.salaryID;
                dto.DepartmentID=item.departmentID;
                dto.PositionID=item.positionID;
                dto.OldSalary = item.amount;
                salaryList.Add(dto);
            }
            return salaryList;
        }

        public static void UpdateSalary(Salary salary)
        {
            try
            {
                Salary sl = db.Salaries.First(x => x.ID == salary.ID);
                sl.Amount=salary.Amount;
                sl.Year=salary.Year;
                sl.MonthID=salary.MonthID;
                db.SubmitChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static void DeleteSalary(int salaryID)
        {
            try
            {
                Salary s = db.Salaries.First(x => x.ID == salaryID);
                db.Salaries.DeleteOnSubmit(s);
                db.SubmitChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
