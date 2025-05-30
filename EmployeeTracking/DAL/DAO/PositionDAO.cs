using DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DAO
{
    public class PositionDAO : EmployeeContext
    {
        public static void AddPosition(Position position)
        {
            try 
            {
                db.Positions.InsertOnSubmit(position);
                db.SubmitChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public static void DeletePosition(int ID)
        {
            try
            {
                Position pos = db.Positions.First(x => x.ID == ID);
                db.Positions.DeleteOnSubmit(pos);
                db.SubmitChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static List<PositionDTO> GetPositions()
        {
            try
            {
                var list = (from p in db.Positions
                            join d in db.Departments on p.DepartmentID equals d.ID
                            select new
                            {
                                positionID = p.ID,
                                positionName = p.PositionName,
                                departmentName = d.DepartmentName,
                                departmentID = p.DepartmentID
                            }
                          ).OrderBy(x => x.positionID).ToList();

                List<PositionDTO> positionsList = new List<PositionDTO>();
                foreach (var item in list)
                {
                    PositionDTO dto = new PositionDTO();
                    dto.ID=item.positionID;
                    dto.PositionName=item.positionName;
                    dto.DepartmentName=item.departmentName;
                    dto.DepartmentID=item.departmentID;
                    positionsList.Add(dto);
                }
                return positionsList;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public static void UpdatePosition(Position position)
        {
            try
            {
                Position pst = db.Positions.First(x => x.ID == position.ID);
                pst.PositionName = position.PositionName;
                pst.DepartmentID = position.DepartmentID;
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
