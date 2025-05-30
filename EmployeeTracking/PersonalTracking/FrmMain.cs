﻿using DAL.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using BLL;

namespace PersonalTracking
{
    public partial class FrmMain : Form
    {
        public FrmMain()
        {
            InitializeComponent();
        }

        private void btnEmployee_Click(object sender, EventArgs e)
        {
            if (!UserStatic.isAdmin)
            {
                EmployeeDTO dto = EmployeeBLL.GetAll();
                EmployeeDetailDTO detail = dto.Employees.First(x=>x.EmployeeID==UserStatic.EmployeeID);
                FrmEmployee frm = new FrmEmployee();
                frm.detail = detail;
                frm.isUpdate = true;
                this.Hide();
                frm.ShowDialog();
                this.Visible = true;
            }
            else
            {
                FrmEmployeeList frm = new FrmEmployeeList();
                this.Hide();
                frm.ShowDialog();
                this.Visible = true;
            }
        }

        private void btnExit_KeyPress(object sender, KeyPressEventArgs e)
        {
            Application.Exit();
        }

        private void btnTasks_Click(object sender, EventArgs e)
        {
           FrmTaskList frm= new FrmTaskList();
            this.Hide();
            frm.ShowDialog();
            this.Visible = true;
        }

        private void btnSalary_Click(object sender, EventArgs e)
        {
            FrmSalaryList frm= new FrmSalaryList();
            this.Hide();
            frm.ShowDialog();
            this.Visible = true;
        }

        private void btnPermission_Click(object sender, EventArgs e)
        {
            FrmPermissionList frm= new FrmPermissionList();
            this.Hide();
            frm.ShowDialog();
            this.Visible = true;
        }

        private void btnDepartment_Click(object sender, EventArgs e)
        {
            FrmDepartmentList frm= new FrmDepartmentList();
            this.Hide();
            frm.ShowDialog();
            this.Visible = true;
        }

        private void btnPosition_Click(object sender, EventArgs e)
        {
            FrmPositionList frm= new FrmPositionList();
            this.Hide();
            frm.ShowDialog();
            this.Visible = true;
        }

        private void btnLogout_Click(object sender, EventArgs e)
        {
            FrmLogin frm= new FrmLogin();
            this.Hide();
            frm.ShowDialog();
            //this.ShowDialog();
        }

        private void btnExitClick(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void FrmMain_Load(object sender, EventArgs e)
        {
            if (!UserStatic.isAdmin) 
            {
                btnDepartment.Visible = false;
                btnPosition.Visible = false;
                btnLogOut.Location = new Point(166, 144);
                btnExit.Location = new Point(324, 144);
            }
        }
    
    }
}
