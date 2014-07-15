
function job(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Job";
	keys[2][1]="driver";
	keys[3][1]="PA"
	keys[4][1]="cleaner";

	keys[0][2]="Doctor";
	keys[1][2]="SLT";
	keys[2][2]="dentist";
	keys[3][2]="nurse";
	keys[4][2]="police officer";

	keys[0][3]="post person";
	keys[1][3]="pilot";
	keys[2][3]="handy person";
	keys[3][3]="OT";
	keys[4][3]="physio";

	keys[0][4]="mechanic"; 
	keys[1][4]="caretaker";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="job.png";
}
