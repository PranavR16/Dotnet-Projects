﻿using BLL;
using DAL;
using DAL.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PersonalTracking
{
    public partial class FrmSalary : Form
    {
        public FrmSalary()
        {
            InitializeComponent();
        }

        private void btnClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnClose_KeyPress(object sender, KeyPressEventArgs e)
        {
            e.Handled = General.isNumber(e);
        }
        SalaryDTO dto= new SalaryDTO();
        private bool combofull=false;
        public SalaryDetailDTO detail=new SalaryDetailDTO();
        public bool isUpdate = false;
        private void FrmSalary_Load(object sender, EventArgs e)
        {
            dto = SalaryBLL.GetAll();
            if(!isUpdate)
            {
                dataGridView1.DataSource = dto.Employees;
                dataGridView1.Columns[0].Visible = false;
                dataGridView1.Columns[1].HeaderText = "UserNo";
                dataGridView1.Columns[2].HeaderText = "Name";
                dataGridView1.Columns[3].HeaderText = "Surname";
                dataGridView1.Columns[4].Visible = false;
                dataGridView1.Columns[5].Visible = false;
                dataGridView1.Columns[6].Visible = false;
                dataGridView1.Columns[7].Visible = false;
                dataGridView1.Columns[8].Visible = false;
                dataGridView1.Columns[9].Visible = false;
                dataGridView1.Columns[10].Visible = false;
                dataGridView1.Columns[11].Visible = false;
                dataGridView1.Columns[12].Visible = false;
                dataGridView1.Columns[13].Visible = false;

                combofull = false;
                cmbDepartment.DataSource = dto.Departments;
                cmbDepartment.DisplayMember = "DepartmentName";
                cmbDepartment.ValueMember = "ID";
                cmbPosition.DataSource = dto.Positions;
                cmbPosition.DisplayMember = "PositionName";
                cmbPosition.ValueMember = "ID";
                cmbDepartment.SelectedIndex = -1;
                cmbPosition.SelectedIndex = -1;
                if (dto.Departments.Count > 0)
                    combofull = true;
            }
            cmbMonth.DataSource = dto.Months;
            cmbMonth.DisplayMember = "MonthName";
            cmbMonth.ValueMember = "ID";
            cmbMonth.SelectedIndex = -1;
            if(isUpdate)
            {
                panel1.Hide();
                txtUserNo.Text=detail.UserNo.ToString();
                txtName.Text=detail.Name;
                txtSalary.Text = detail.SalaryAmount.ToString();
                txtSurname.Text = detail.Surname;
                txtYear.Text=detail.SalaryYear.ToString();
                cmbMonth.SelectedValue=detail.MonthID;
            }

        }
        Salary salary = new Salary();
        int oldSalary = 0;

        private void dataGridView1_RowEnter(object sender, DataGridViewCellEventArgs e)
        {
            txtUserNo.Text = dataGridView1.Rows[e.RowIndex].Cells[1].Value.ToString();
            txtName.Text = dataGridView1.Rows[e.RowIndex].Cells[2].Value.ToString();
            txtSurname.Text = dataGridView1.Rows[e.RowIndex].Cells[3].Value.ToString();
            txtYear.Text = DateTime.Today.Year.ToString();
            txtSalary.Text = dataGridView1.Rows[e.RowIndex].Cells[8].Value.ToString();
            salary.EmployeeID = Convert.ToInt32(dataGridView1.Rows[e.RowIndex].Cells[0].Value);
            oldSalary = Convert.ToInt32(dataGridView1.Rows[e.RowIndex].Cells[8].Value);


        }
        private void btnSave_Click(object sender, EventArgs e)
        {
            if (txtYear.Text.Trim() == "")
                MessageBox.Show("Please fill the Year");
            else if(cmbMonth.SelectedIndex==-1)
                MessageBox.Show("Please select a Month");
            else if (txtSalary.Text.Trim() == "")
                MessageBox.Show("Please fill the salary");
            else if (txtUserNo.Text == "")
                MessageBox.Show("Please select an Employee from table");
            else
            {
                bool control = false;
                if (!isUpdate)
                {
                    if (salary.EmployeeID == 0)
                        MessageBox.Show("Please select an employee from table");
                    else
                    {
                        salary.Year = Convert.ToInt32(txtYear.Text);
                        salary.MonthID = Convert.ToInt32(cmbMonth.SelectedValue);
                        salary.Amount = Convert.ToInt32(txtSalary.Text);
                        if(salary.Amount > oldSalary)
                            control = true;
                        //salary.EmployeeID = Convert.ToInt32(txtUserNo.Text);
                        SalaryBLL.AddSalary(salary,control);
                        MessageBox.Show("Salary was Added");
                        cmbMonth.SelectedIndex = -1;
                        salary = new Salary();
                    }
                }
                else
                {
                    DialogResult result = MessageBox.Show("Are you sure ?", "Title", MessageBoxButtons.YesNo);
                    if (DialogResult.Yes==result)
                    {
                        Salary salary = new Salary();
                        salary.ID=detail.SalaryID;
                        salary.EmployeeID=detail.EmployeeID;
                        salary.Year=Convert.ToInt32(txtYear.Text);
                        salary.MonthID=Convert.ToInt32(cmbMonth.SelectedValue);
                        salary.Amount=Convert.ToInt32(txtSalary.Text);
                        if (salary.Amount > detail.OldSalary)
                            control = true;
                        SalaryBLL.UpdateSalary(salary,control);
                        MessageBox.Show("Salary was Updated");
                        this.Close();

                    }
                }
            }

        }
       

    }
}
