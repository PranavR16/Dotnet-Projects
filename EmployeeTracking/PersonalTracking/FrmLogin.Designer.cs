namespace PersonalTracking
{
    partial class FrmLogin
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;
        // Add this line to declare the panel
        private System.Windows.Forms.Panel pnlLogin;


        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        //#region Windows Form Designer generated code

        ///// <summary>
        ///// Required method for Designer support - do not modify
        ///// the contents of this method with the code editor.
        ///// </summary>
        //private void InitializeComponent()
        //{
        //    this.txtUserNo = new System.Windows.Forms.TextBox();
        //    this.lblUserNo = new System.Windows.Forms.Label();
        //    this.txtPassword = new System.Windows.Forms.TextBox();
        //    this.lblPassword = new System.Windows.Forms.Label();
        //    this.btnLogin = new System.Windows.Forms.Button();
        //    this.btnExit = new System.Windows.Forms.Button();
        //    this.SuspendLayout();
        //    // 
        //    // txtUserNo
        //    // 
        //    this.txtUserNo.Location = new System.Drawing.Point(143, 44);
        //    this.txtUserNo.Name = "txtUserNo";
        //    this.txtUserNo.Size = new System.Drawing.Size(130, 22);
        //    this.txtUserNo.TabIndex = 0;
        //    this.txtUserNo.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
        //    this.txtUserNo.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.textBox1_KeyPress);
        //    // 
        //    // lblUserNo
        //    // 
        //    this.lblUserNo.AutoSize = true;
        //    this.lblUserNo.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
        //    this.lblUserNo.Location = new System.Drawing.Point(30, 41);
        //    this.lblUserNo.Name = "lblUserNo";
        //    this.lblUserNo.Size = new System.Drawing.Size(84, 25);
        //    this.lblUserNo.TabIndex = 0;
        //    this.lblUserNo.Text = "UserNo";
        //    this.lblUserNo.Click += new System.EventHandler(this.label1_Click);
        //    this.lblUserNo.Paint += new System.Windows.Forms.PaintEventHandler(this.txtUserNo_Paint);
        //    // 
        //    // txtPassword
        //    // 
        //    this.txtPassword.BackColor = System.Drawing.SystemColors.ControlLightLight;
        //    this.txtPassword.Location = new System.Drawing.Point(142, 84);
        //    this.txtPassword.Name = "txtPassword";
        //    this.txtPassword.PasswordChar = '*';
        //    this.txtPassword.Size = new System.Drawing.Size(130, 22);
        //    this.txtPassword.TabIndex = 1;
        //    this.txtPassword.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
        //    // 
        //    // lblPassword
        //    // 
        //    this.lblPassword.AutoSize = true;
        //    this.lblPassword.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
        //    this.lblPassword.Location = new System.Drawing.Point(30, 81);
        //    this.lblPassword.Name = "lblPassword";
        //    this.lblPassword.Size = new System.Drawing.Size(106, 25);
        //    this.lblPassword.TabIndex = 0;
        //    this.lblPassword.Text = "Password";
        //    this.lblPassword.Click += new System.EventHandler(this.label1_Click);
        //    // 
        //    // btnLogin
        //    // 
        //    this.btnLogin.BackColor = System.Drawing.SystemColors.Highlight;
        //    this.btnLogin.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
        //    this.btnLogin.Location = new System.Drawing.Point(143, 151);
        //    this.btnLogin.Name = "btnLogin";
        //    this.btnLogin.Size = new System.Drawing.Size(100, 44);
        //    this.btnLogin.TabIndex = 3;
        //    this.btnLogin.Text = "Login";
        //    this.btnLogin.UseVisualStyleBackColor = false;
        //    this.btnLogin.Click += new System.EventHandler(this.btnLogin_Click);
        //    // 
        //    // btnExit
        //    // 
        //    this.btnExit.BackColor = System.Drawing.SystemColors.Menu;
        //    this.btnExit.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Black;
        //    this.btnExit.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
        //    this.btnExit.Location = new System.Drawing.Point(35, 151);
        //    this.btnExit.Name = "btnExit";
        //    this.btnExit.Size = new System.Drawing.Size(100, 44);
        //    this.btnExit.TabIndex = 2;
        //    this.btnExit.Text = "Exit";
        //    this.btnExit.UseVisualStyleBackColor = false;
        //    this.btnExit.Click += new System.EventHandler(this.button1_Click);
        //    // 
        //    // FrmLogin
        //    // 
        //    this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
        //    this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
        //    this.ClientSize = new System.Drawing.Size(401, 239);
        //    this.Controls.Add(this.btnExit);
        //    this.Controls.Add(this.btnLogin);
        //    this.Controls.Add(this.lblPassword);
        //    this.Controls.Add(this.lblUserNo);
        //    this.Controls.Add(this.txtPassword);
        //    this.Controls.Add(this.txtUserNo);
        //    this.Name = "FrmLogin";
        //    this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
        //    this.Text = "Form1";
        //    this.Load += new System.EventHandler(this.FrmLogin_Load);
        //    this.ResumeLayout(false);
        //    this.PerformLayout();

        //}

        //#endregion

        #region Windows Form Designer generated code

        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FrmLogin));
            this.pnlLogin = new System.Windows.Forms.Panel();
            this.lblUserNo = new System.Windows.Forms.Label();
            this.txtUserNo = new System.Windows.Forms.TextBox();
            this.lblPassword = new System.Windows.Forms.Label();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.btnLogin = new System.Windows.Forms.Button();
            this.btnExit = new System.Windows.Forms.Button();
            this.pnlLogin.SuspendLayout();
            this.SuspendLayout();
            // 
            // pnlLogin
            // 
            this.pnlLogin.BackColor = System.Drawing.Color.White;
            this.pnlLogin.Controls.Add(this.lblUserNo);
            this.pnlLogin.Controls.Add(this.txtUserNo);
            this.pnlLogin.Controls.Add(this.lblPassword);
            this.pnlLogin.Controls.Add(this.txtPassword);
            this.pnlLogin.Controls.Add(this.btnLogin);
            this.pnlLogin.Controls.Add(this.btnExit);
            this.pnlLogin.Location = new System.Drawing.Point(0, 0);
            this.pnlLogin.Name = "pnlLogin";
            this.pnlLogin.Padding = new System.Windows.Forms.Padding(20);
            this.pnlLogin.Size = new System.Drawing.Size(320, 200);
            this.pnlLogin.TabIndex = 0;
            // 
            // lblUserNo
            // 
            this.lblUserNo.AutoSize = true;
            this.lblUserNo.Font = new System.Drawing.Font("Segoe UI", 14F, System.Drawing.FontStyle.Bold);
            this.lblUserNo.Location = new System.Drawing.Point(30, 40);
            this.lblUserNo.Name = "lblUserNo";
            this.lblUserNo.Size = new System.Drawing.Size(100, 31);
            this.lblUserNo.TabIndex = 0;
            this.lblUserNo.Text = "User No";
            // 
            // txtUserNo
            // 
            this.txtUserNo.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.txtUserNo.Font = new System.Drawing.Font("Segoe UI", 10F);
            this.txtUserNo.Location = new System.Drawing.Point(147, 40);
            this.txtUserNo.Name = "txtUserNo";
            this.txtUserNo.Size = new System.Drawing.Size(150, 29);
            this.txtUserNo.TabIndex = 1;
            // 
            // lblPassword
            // 
            this.lblPassword.AutoSize = true;
            this.lblPassword.Font = new System.Drawing.Font("Segoe UI", 14F, System.Drawing.FontStyle.Bold);
            this.lblPassword.Location = new System.Drawing.Point(30, 90);
            this.lblPassword.Name = "lblPassword";
            this.lblPassword.Size = new System.Drawing.Size(114, 31);
            this.lblPassword.TabIndex = 2;
            this.lblPassword.Text = "Password";
            // 
            // txtPassword
            // 
            this.txtPassword.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.txtPassword.Font = new System.Drawing.Font("Segoe UI", 10F);
            this.txtPassword.Location = new System.Drawing.Point(147, 90);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.Size = new System.Drawing.Size(150, 29);
            this.txtPassword.TabIndex = 3;
            this.txtPassword.UseSystemPasswordChar = true;
            // 
            // btnLogin
            // 
            this.btnLogin.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(52)))), ((int)(((byte)(152)))), ((int)(((byte)(219)))));
            this.btnLogin.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnLogin.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnLogin.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold);
            this.btnLogin.ForeColor = System.Drawing.Color.White;
            this.btnLogin.Location = new System.Drawing.Point(169, 137);
            this.btnLogin.Name = "btnLogin";
            this.btnLogin.Size = new System.Drawing.Size(100, 40);
            this.btnLogin.TabIndex = 4;
            this.btnLogin.Text = "Login";
            this.btnLogin.UseVisualStyleBackColor = false;
            this.btnLogin.Click += new System.EventHandler(this.btnLogin_Click);
            // 
            // btnExit
            // 
            this.btnExit.BackColor = System.Drawing.Color.Red;
            this.btnExit.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnExit.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnExit.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Bold);
            this.btnExit.ForeColor = System.Drawing.Color.White;
            this.btnExit.Location = new System.Drawing.Point(51, 137);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(100, 40);
            this.btnExit.TabIndex = 5;
            this.btnExit.Text = "Exit";
            this.btnExit.UseVisualStyleBackColor = false;
            this.btnExit.Click += new System.EventHandler(this.button1_Click);
            // 
            // FrmLogin
            // 
            this.BackColor = System.Drawing.Color.WhiteSmoke;
            this.ClientSize = new System.Drawing.Size(322, 203);
            this.Controls.Add(this.pnlLogin);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "FrmLogin";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Login";
            this.Load += new System.EventHandler(this.FrmLogin_Load_1);
            this.pnlLogin.ResumeLayout(false);
            this.pnlLogin.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.TextBox txtUserNo;
        private System.Windows.Forms.Label lblUserNo;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.Label lblPassword;
        private System.Windows.Forms.Button btnLogin;
        private System.Windows.Forms.Button btnExit;
    }
}

