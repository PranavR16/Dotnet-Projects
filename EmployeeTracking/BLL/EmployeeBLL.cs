﻿using DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.DTO;
using DAL.DAO;
using DAL;

namespace BLL
{
    public class EmployeeBLL
    {
        public static void AddEmployee(Employee employee)
        {
            EmployeeDAO.AddEmployee(employee);
        }

        public static void DeleteEmployee(int employeeID)
        {
            EmployeeDAO.DeleteEmployee(employeeID);
        }

        public static EmployeeDTO GetAll()
        {
            EmployeeDTO dto = new EmployeeDTO();
            dto.Departments = DepartmentDAO.GetDeaprtments();
            dto.Positions = PositionDAO.GetPositions();
            dto.Employees = EmployeeDAO.GetEmployees();
            return dto;
        }

        public static List<Employee> GetEmployees(int v, string text)
        {
            return EmployeeDAO.GetEmployees(v, text);
        }

        public static bool isUnique(int v)
        {
            List<Employee> list = EmployeeDAO.GetUsers(v);
            if (list.Count > 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public static void UpdateEmployee(Employee employee)
        {
            EmployeeDAO.UpdateEmployee(employee);
        }
    }
}
