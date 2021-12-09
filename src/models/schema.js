export const schema = {
    "models": {
        "InternForm": {
            "name": "InternForm",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Student_Name": {
                    "name": "Student_Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "W_Num": {
                    "name": "W_Num",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Cell_Num": {
                    "name": "Student_Cell_Num",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": true,
                    "attributes": []
                },
                "Student_Home_Phone": {
                    "name": "Student_Home_Phone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Work_Number": {
                    "name": "Student_Work_Number",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Present_Address": {
                    "name": "Student_Present_Address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Permanent_Address": {
                    "name": "Student_Permanent_Address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Email": {
                    "name": "Student_Email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "Degree": {
                    "name": "Degree",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Semester_Hours_Earned": {
                    "name": "Semester_Hours_Earned",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Major_GPA": {
                    "name": "Major_GPA",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Expected_Grad_Date": {
                    "name": "Expected_Grad_Date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Company_Name": {
                    "name": "Company_Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Company_Address": {
                    "name": "Company_Address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Name_and_Title_Immediate_Supervisor": {
                    "name": "Name_and_Title_Immediate_Supervisor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Email": {
                    "name": "Supervisor_Email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "Supervisor_Phone": {
                    "name": "Supervisor_Phone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": true,
                    "attributes": []
                },
                "Proposed_Start": {
                    "name": "Proposed_Start",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Proposed_End": {
                    "name": "Proposed_End",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Employed_Full": {
                    "name": "Employed_Full",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Job_Title": {
                    "name": "Job_Title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Job_Responsibilities": {
                    "name": "Job_Responsibilities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Form_401": {
                    "name": "Student_Signature_Form_401",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Date_Form_401": {
                    "name": "Student_Signature_Date_Form_401",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Date_Rec_Dep": {
                    "name": "Date_Rec_Dep",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Action_Taken": {
                    "name": "Action_Taken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Reason": {
                    "name": "Reason",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Faculty_Signature_Form_401": {
                    "name": "Faculty_Signature_Form_401",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Faculty_Signature_Date_Form_401": {
                    "name": "Faculty_Signature_Date_Form_401",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Dep_Head_Signature_Form_401": {
                    "name": "Dep_Head_Signature_Form_401",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Dep_Head_Signature_Date_Form_401": {
                    "name": "Dep_Head_Signature_Date_Form_401",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Dean_Signature_Form_401": {
                    "name": "Dean_Signature_Form_401",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Dean_Signature_Date_Form_401": {
                    "name": "Dean_Signature_Date_Form_401",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Semester_And_Year": {
                    "name": "Semester_And_Year",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Hours_Per_Week": {
                    "name": "Hours_Per_Week",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Employer_Signature_Form_402": {
                    "name": "Employer_Signature_Form_402",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Employer_City": {
                    "name": "Employer_City",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Employer_State": {
                    "name": "Employer_State",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Employer_Zip": {
                    "name": "Employer_Zip",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Form_402": {
                    "name": "Student_Signature_Form_402",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Date_Form_402": {
                    "name": "Student_Signature_Date_Form_402",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Will_Accomplish_1": {
                    "name": "Student_Will_Accomplish_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Rating_1": {
                    "name": "Supervisor_Rating_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Will_Accomplish_2": {
                    "name": "Student_Will_Accomplish_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Rating_2": {
                    "name": "Supervisor_Rating_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Will_Accomplish_3": {
                    "name": "Student_Will_Accomplish_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Rating_3": {
                    "name": "Supervisor_Rating_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Form_403": {
                    "name": "Student_Signature_Form_403",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Date_Form_403": {
                    "name": "Student_Signature_Date_Form_403",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Employer_Signature_Form_403": {
                    "name": "Employer_Signature_Form_403",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Employer_Signature_Date_Form_403": {
                    "name": "Employer_Signature_Date_Form_403",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Intern_Cord_Signature_Form_403": {
                    "name": "Intern_Cord_Signature_Form_403",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Intern_Cord_Signature_Date_Form_403": {
                    "name": "Intern_Cord_Signature_Date_Form_403",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Total_Hours_For_Semester": {
                    "name": "Total_Hours_For_Semester",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Total_Wages_For_Deduction": {
                    "name": "Total_Wages_For_Deduction",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1": {
                    "name": "Month_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1": {
                    "name": "Month_1_Week_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Sun": {
                    "name": "Month_1_Week_1_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Mon": {
                    "name": "Month_1_Week_1_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Tue": {
                    "name": "Month_1_Week_1_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Wed": {
                    "name": "Month_1_Week_1_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Thu": {
                    "name": "Month_1_Week_1_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Fri": {
                    "name": "Month_1_Week_1_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Sat": {
                    "name": "Month_1_Week_1_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Total_Hours": {
                    "name": "Month_1_Week_1_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_1_Weekly_Wages": {
                    "name": "Month_1_Week_1_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2": {
                    "name": "Month_1_Week_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Sun": {
                    "name": "Month_1_Week_2_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Mon": {
                    "name": "Month_1_Week_2_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Tue": {
                    "name": "Month_1_Week_2_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Wed": {
                    "name": "Month_1_Week_2_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Thu": {
                    "name": "Month_1_Week_2_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Fri": {
                    "name": "Month_1_Week_2_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Sat": {
                    "name": "Month_1_Week_2_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Total_Hours": {
                    "name": "Month_1_Week_2_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_2_Weekly_Wages": {
                    "name": "Month_1_Week_2_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3": {
                    "name": "Month_1_Week_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Sun": {
                    "name": "Month_1_Week_3_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Mon": {
                    "name": "Month_1_Week_3_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Tue": {
                    "name": "Month_1_Week_3_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Wed": {
                    "name": "Month_1_Week_3_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Thu": {
                    "name": "Month_1_Week_3_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Fri": {
                    "name": "Month_1_Week_3_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Sat": {
                    "name": "Month_1_Week_3_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Total_Hours": {
                    "name": "Month_1_Week_3_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_3_Weekly_Wages": {
                    "name": "Month_1_Week_3_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4": {
                    "name": "Month_1_Week_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Sun": {
                    "name": "Month_1_Week_4_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Mon": {
                    "name": "Month_1_Week_4_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Tue": {
                    "name": "Month_1_Week_4_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Wed": {
                    "name": "Month_1_Week_4_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Thu": {
                    "name": "Month_1_Week_4_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Fri": {
                    "name": "Month_1_Week_4_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Sat": {
                    "name": "Month_1_Week_4_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Total_Hours": {
                    "name": "Month_1_Week_4_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Week_4_Weekly_Wages": {
                    "name": "Month_1_Week_4_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Sun": {
                    "name": "Month_1_Total_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Mon": {
                    "name": "Month_1_Total_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Tue": {
                    "name": "Month_1_Total_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Wed": {
                    "name": "Month_1_Total_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Thu": {
                    "name": "Month_1_Total_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Fri": {
                    "name": "Month_1_Total_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Sat": {
                    "name": "Month_1_Total_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Hours": {
                    "name": "Month_1_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_1_Total_Weekly_Wages": {
                    "name": "Month_1_Total_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2": {
                    "name": "Month_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1": {
                    "name": "Month_2_Week_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Sun": {
                    "name": "Month_2_Week_1_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Mon": {
                    "name": "Month_2_Week_1_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Tue": {
                    "name": "Month_2_Week_1_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Wed": {
                    "name": "Month_2_Week_1_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Thu": {
                    "name": "Month_2_Week_1_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Fri": {
                    "name": "Month_2_Week_1_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Sat": {
                    "name": "Month_2_Week_1_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Total_Hours": {
                    "name": "Month_2_Week_1_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_1_Weekly_Wages": {
                    "name": "Month_2_Week_1_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2": {
                    "name": "Month_2_Week_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Sun": {
                    "name": "Month_2_Week_2_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Mon": {
                    "name": "Month_2_Week_2_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Tue": {
                    "name": "Month_2_Week_2_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Wed": {
                    "name": "Month_2_Week_2_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Thu": {
                    "name": "Month_2_Week_2_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Fri": {
                    "name": "Month_2_Week_2_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Sat": {
                    "name": "Month_2_Week_2_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Total_Hours": {
                    "name": "Month_2_Week_2_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_2_Weekly_Wages": {
                    "name": "Month_2_Week_2_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3": {
                    "name": "Month_2_Week_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Sun": {
                    "name": "Month_2_Week_3_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Mon": {
                    "name": "Month_2_Week_3_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Tue": {
                    "name": "Month_2_Week_3_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Wed": {
                    "name": "Month_2_Week_3_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Thu": {
                    "name": "Month_2_Week_3_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Fri": {
                    "name": "Month_2_Week_3_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Sat": {
                    "name": "Month_2_Week_3_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Total_Hours": {
                    "name": "Month_2_Week_3_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_3_Weekly_Wages": {
                    "name": "Month_2_Week_3_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4": {
                    "name": "Month_2_Week_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Sun": {
                    "name": "Month_2_Week_4_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Mon": {
                    "name": "Month_2_Week_4_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Tue": {
                    "name": "Month_2_Week_4_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Wed": {
                    "name": "Month_2_Week_4_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Thu": {
                    "name": "Month_2_Week_4_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Fri": {
                    "name": "Month_2_Week_4_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Sat": {
                    "name": "Month_2_Week_4_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Total_Hours": {
                    "name": "Month_2_Week_4_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Week_4_Weekly_Wages": {
                    "name": "Month_2_Week_4_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Sun": {
                    "name": "Month_2_Total_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Mon": {
                    "name": "Month_2_Total_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Tue": {
                    "name": "Month_2_Total_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Wed": {
                    "name": "Month_2_Total_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Thu": {
                    "name": "Month_2_Total_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Fri": {
                    "name": "Month_2_Total_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Sat": {
                    "name": "Month_2_Total_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Hours": {
                    "name": "Month_2_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_2_Total_Weekly_Wages": {
                    "name": "Month_2_Total_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3": {
                    "name": "Month_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1": {
                    "name": "Month_3_Week_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Sun": {
                    "name": "Month_3_Week_1_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Mon": {
                    "name": "Month_3_Week_1_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Tue": {
                    "name": "Month_3_Week_1_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Wed": {
                    "name": "Month_3_Week_1_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Thu": {
                    "name": "Month_3_Week_1_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Fri": {
                    "name": "Month_3_Week_1_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Sat": {
                    "name": "Month_3_Week_1_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Total_Hours": {
                    "name": "Month_3_Week_1_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_1_Weekly_Wages": {
                    "name": "Month_3_Week_1_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2": {
                    "name": "Month_3_Week_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Sun": {
                    "name": "Month_3_Week_2_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Mon": {
                    "name": "Month_3_Week_2_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Tue": {
                    "name": "Month_3_Week_2_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Wed": {
                    "name": "Month_3_Week_2_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Thu": {
                    "name": "Month_3_Week_2_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Fri": {
                    "name": "Month_3_Week_2_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Sat": {
                    "name": "Month_3_Week_2_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Total_Hours": {
                    "name": "Month_3_Week_2_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_2_Weekly_Wages": {
                    "name": "Month_3_Week_2_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3": {
                    "name": "Month_3_Week_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Sun": {
                    "name": "Month_3_Week_3_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Mon": {
                    "name": "Month_3_Week_3_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Tue": {
                    "name": "Month_3_Week_3_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Wed": {
                    "name": "Month_3_Week_3_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Thu": {
                    "name": "Month_3_Week_3_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Fri": {
                    "name": "Month_3_Week_3_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Sat": {
                    "name": "Month_3_Week_3_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Total_Hours": {
                    "name": "Month_3_Week_3_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_3_Weekly_Wages": {
                    "name": "Month_3_Week_3_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4": {
                    "name": "Month_3_Week_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Sun": {
                    "name": "Month_3_Week_4_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Mon": {
                    "name": "Month_3_Week_4_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Tue": {
                    "name": "Month_3_Week_4_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Wed": {
                    "name": "Month_3_Week_4_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Thu": {
                    "name": "Month_3_Week_4_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Fri": {
                    "name": "Month_3_Week_4_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Sat": {
                    "name": "Month_3_Week_4_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Total_Hours": {
                    "name": "Month_3_Week_4_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Week_4_Weekly_Wages": {
                    "name": "Month_3_Week_4_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Sun": {
                    "name": "Month_3_Total_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Mon": {
                    "name": "Month_3_Total_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Tue": {
                    "name": "Month_3_Total_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Wed": {
                    "name": "Month_3_Total_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Thu": {
                    "name": "Month_3_Total_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Fri": {
                    "name": "Month_3_Total_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Sat": {
                    "name": "Month_3_Total_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Hours": {
                    "name": "Month_3_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_3_Total_Weekly_Wages": {
                    "name": "Month_3_Total_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4": {
                    "name": "Month_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1": {
                    "name": "Month_4_Week_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Sun": {
                    "name": "Month_4_Week_1_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Mon": {
                    "name": "Month_4_Week_1_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Tue": {
                    "name": "Month_4_Week_1_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Wed": {
                    "name": "Month_4_Week_1_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Thu": {
                    "name": "Month_4_Week_1_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Fri": {
                    "name": "Month_4_Week_1_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Sat": {
                    "name": "Month_4_Week_1_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Total_Hours": {
                    "name": "Month_4_Week_1_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_1_Weekly_Wages": {
                    "name": "Month_4_Week_1_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2": {
                    "name": "Month_4_Week_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Sun": {
                    "name": "Month_4_Week_2_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Mon": {
                    "name": "Month_4_Week_2_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Tue": {
                    "name": "Month_4_Week_2_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Wed": {
                    "name": "Month_4_Week_2_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Thu": {
                    "name": "Month_4_Week_2_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Fri": {
                    "name": "Month_4_Week_2_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Sat": {
                    "name": "Month_4_Week_2_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Total_Hours": {
                    "name": "Month_4_Week_2_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_2_Weekly_Wages": {
                    "name": "Month_4_Week_2_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3": {
                    "name": "Month_4_Week_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Sun": {
                    "name": "Month_4_Week_3_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Mon": {
                    "name": "Month_4_Week_3_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Tue": {
                    "name": "Month_4_Week_3_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Wed": {
                    "name": "Month_4_Week_3_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Thu": {
                    "name": "Month_4_Week_3_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Fri": {
                    "name": "Month_4_Week_3_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Sat": {
                    "name": "Month_4_Week_3_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Total_Hours": {
                    "name": "Month_4_Week_3_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_3_Weekly_Wages": {
                    "name": "Month_4_Week_3_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4": {
                    "name": "Month_4_Week_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Sun": {
                    "name": "Month_4_Week_4_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Mon": {
                    "name": "Month_4_Week_4_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Tue": {
                    "name": "Month_4_Week_4_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Wed": {
                    "name": "Month_4_Week_4_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Thu": {
                    "name": "Month_4_Week_4_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Fri": {
                    "name": "Month_4_Week_4_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Sat": {
                    "name": "Month_4_Week_4_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Total_Hours": {
                    "name": "Month_4_Week_4_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Week_4_Weekly_Wages": {
                    "name": "Month_4_Week_4_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Sun": {
                    "name": "Month_4_Total_Sun",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Mon": {
                    "name": "Month_4_Total_Mon",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Tue": {
                    "name": "Month_4_Total_Tue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Wed": {
                    "name": "Month_4_Total_Wed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Thu": {
                    "name": "Month_4_Total_Thu",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Fri": {
                    "name": "Month_4_Total_Fri",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Sat": {
                    "name": "Month_4_Total_Sat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Hours": {
                    "name": "Month_4_Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Month_4_Total_Weekly_Wages": {
                    "name": "Month_4_Total_Weekly_Wages",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Form_404": {
                    "name": "Student_Signature_Form_404",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Date_Form_404": {
                    "name": "Student_Signature_Date_Form_404",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Signature_Form_404": {
                    "name": "Supervisor_Signature_Form_404",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Signature_Date_Form_404": {
                    "name": "Supervisor_Signature_Date_Form_404",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Date_Form_420": {
                    "name": "Date_Form_420",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Relations_With_Others": {
                    "name": "Relations_With_Others",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Attitude_Application_To_Work": {
                    "name": "Attitude_Application_To_Work",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Judgement": {
                    "name": "Judgement",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Dependability": {
                    "name": "Dependability",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Ability_To_Learn": {
                    "name": "Ability_To_Learn",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Quality_Of_Work": {
                    "name": "Quality_Of_Work",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Overall_Performance": {
                    "name": "Overall_Performance",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Attendance": {
                    "name": "Attendance",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Punctuality": {
                    "name": "Punctuality",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Remarks": {
                    "name": "Remarks",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Report_Discussed_With_Student": {
                    "name": "Report_Discussed_With_Student",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Form_420": {
                    "name": "Student_Signature_Form_420",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Date_Form_420": {
                    "name": "Student_Signature_Date_Form_420",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Signature_Form_420": {
                    "name": "Supervisor_Signature_Form_420",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Signature_Date_Form_420": {
                    "name": "Supervisor_Signature_Date_Form_420",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Supervisor_Name": {
                    "name": "Supervisor_Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Rating_Of_Employer": {
                    "name": "Rating_Of_Employer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Rating_Of_Work_Exp": {
                    "name": "Rating_Of_Work_Exp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Relation_To_CMPS_Studies": {
                    "name": "Relation_To_CMPS_Studies",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Rating_Of_Learning_Of_Internship": {
                    "name": "Rating_Of_Learning_Of_Internship",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Would_You_Repeat": {
                    "name": "Would_You_Repeat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Would_You_Repeat_Explain": {
                    "name": "Would_You_Repeat_Explain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Would_You_Recommend": {
                    "name": "Would_You_Recommend",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Would_You_Recommend_Explain": {
                    "name": "Would_You_Recommend_Explain",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Additional_Content_For_Curriculum": {
                    "name": "Additional_Content_For_Curriculum",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Any_Additional_Comments": {
                    "name": "Any_Additional_Comments",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Form_405": {
                    "name": "Student_Signature_Form_405",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Student_Signature_Date_Form_405": {
                    "name": "Student_Signature_Date_Form_405",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_1": {
                    "name": "Week_1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_1_Activities": {
                    "name": "Week_1_Activities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_1_Hours": {
                    "name": "Week_1_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_2": {
                    "name": "Week_2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_2_Activities": {
                    "name": "Week_2_Activities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_2_Hours": {
                    "name": "Week_2_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_3": {
                    "name": "Week_3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_3_Activities": {
                    "name": "Week_3_Activities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_3_Hours": {
                    "name": "Week_3_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_4": {
                    "name": "Week_4",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_4_Activities": {
                    "name": "Week_4_Activities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_4_Hours": {
                    "name": "Week_4_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_5": {
                    "name": "Week_5",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_5_Activities": {
                    "name": "Week_5_Activities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_5_Hours": {
                    "name": "Week_5_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_6": {
                    "name": "Week_6",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_6_Activities": {
                    "name": "Week_6_Activities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_6_Hours": {
                    "name": "Week_6_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_7": {
                    "name": "Week_7",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_7_Activities": {
                    "name": "Week_7_Activities",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Week_7_Hours": {
                    "name": "Week_7_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Total_Hours": {
                    "name": "Total_Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Form_401": {
                    "name": "Form_401",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Form_402": {
                    "name": "Form_402",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Form_403": {
                    "name": "Form_403",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Form_404": {
                    "name": "Form_404",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Form_405": {
                    "name": "Form_405",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Form_420": {
                    "name": "Form_420",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Form_410": {
                    "name": "Form_410",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sup_sig_date_form_402": {
                    "name": "sup_sig_date_form_402",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "compl_sup_sig_form_403": {
                    "name": "compl_sup_sig_form_403",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "compl_sup_sig_date_form_403": {
                    "name": "compl_sup_sig_date_form_403",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "InternForms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "update",
                                    "create"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "us-east-2_8VTuL3EWf_Google"
                                ],
                                "operations": [
                                    "read",
                                    "create",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "edf323752dd629f197c0e07eca72643f"
};