
function job(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Job";
	utterances[2][1]="driver";
	utterances[3][1]="PA"
	utterances[4][1]="cleaner";

	utterances[0][2]="Doctor";
	utterances[1][2]="SLT";
	utterances[2][2]="dentist";
	utterances[3][2]="nurse";
	utterances[4][2]="police officer";

	utterances[0][3]="post person";
	utterances[1][3]="pilot";
	utterances[2][3]="handy person";
	utterances[3][3]="OT";
	utterances[4][3]="physio";

	utterances[0][4]="mechanic"; 
	utterances[1][4]="caretaker";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/job.png";
}
