﻿using DAL;
using DAL.DAO;
using DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PositionBLL
    {
        public static void AddPosition(Position position)
        {
            PositionDAO.AddPosition(position);
        }

        public static void DeletePosition(int ID)
        {
            PositionDAO.DeletePosition(ID);
        }

        public static List<PositionDTO> GetPositions()
        {
            return PositionDAO.GetPositions();
        }

        public static void UpdatePosition(Position position, bool control)
        {
            PositionDAO.UpdatePosition(position);
            if (control)
            {
                EmployeeDAO.UpdateEmployee(position);
            }
        }
    }
}
