﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.DAO;

namespace BLL
{
    public class DepartmentBLL
    {
        public static void AddDepartment(Department department)
        {
            DepartmentDAO.AddDepartment(department);
        }

        public static void DeleteDepartment(int iD)
        {
            DepartmentDAO.DeleteDepartment(iD);
        }

        public static List<Department> GetDepartments()
        {
            return DepartmentDAO.GetDeaprtments();
        }

        public static void UpdateDepartment(Department department)
        {
            DepartmentDAO.UpdateDepartment(department);
        }
    }
}
