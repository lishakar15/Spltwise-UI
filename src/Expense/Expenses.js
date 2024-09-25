import React, { useEffect, useState } from "react";
import { GROUP_DATA } from "../data/groupsData";
import ExpenseGroupInfoCard from "./ExpenseGroupInfoCard";
import ExpenseTabs from "./ExpenseTabs";
import { useParams } from "react-router-dom";
import { backendService } from "../services/backendServices";

const Expense = () => {
  const { groupId } = useParams();
  const [groupData,setGroupData] = useState(null);

    useEffect(()=>{
      const getGroupData = async () => {
        if(groupId)
        {
          try{
            const response = await backendService.getGroupDataByGroupId(groupId);
            setGroupData(response);
          }
          catch(err){
            console.log("Error occured while fecthing group data "+err);
          }
        } 
      };
      getGroupData();
    },[groupId]);
  return (
    <>
      <ExpenseGroupInfoCard groupData={groupData} />
      <ExpenseTabs />
    </>
  );
};

export default Expense;
