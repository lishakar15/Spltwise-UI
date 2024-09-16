import React from "react";
import {
  AvatarGroup,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import AvatarGenerator from "../AvatarGenerator";
import { GROUP_DATA } from "../data/groupsData";
import { GROUP_OWE_SUMMARY } from "../data/GroupOwedData";
import GroupOweSummaryChip from "./GroupOweSummaryChip";

const GroupList = () => {
  const handleGroupClick = () => {
    alert("group clicked");
  };

  const getGroupOwe = (currentGroup)=>
  {
    const groupOwe = GROUP_OWE_SUMMARY.find(((currentGroup.groupId)));
  }
  return (
    <>
      {GROUP_DATA ? (
        GROUP_DATA.map((group) => (
          <Card sx={{ my: 2, border: "1px solid #e5e7eb" }}>
            <>
              <CardContent
                onClick={handleGroupClick}
                sx={{
                  px: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "grey.300",
                  },
                  transition: "background-color 0.3s ease",
                }}
              >
                <Box container sx={{ display: "flex" }}>
                  <Box>
                    <AvatarGenerator userName={group.groupName} size={"lg"} />
                  </Box>
                  <Box sx={{ ml: 1 }}>
                    <Typography sx={{ fontWeight: "bold", color: "#512DA8" }}>
                      {group.groupName}
                    </Typography>
                    <Typography>
                      {group.groupMembers.map((member, index) => (
                        <>
                          {member.userName}
                          {index < group.groupMembers.length - 1 ? ", " : ""}
                        </>
                      ))}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <AvatarGroup total={group.groupMembers.length} max={4}>
                        {group.groupMembers.map((member) => (
                          <AvatarGenerator
                            userName={member.userName}
                            size={"sm"}
                          />
                        ))}
                      </AvatarGroup>
                    </Box>
                  </Box>
                </Box>
                <Box>
                    <GroupOweSummaryChip currentGroupId={group.groupId} groupOweList={GROUP_OWE_SUMMARY}/>
                </Box>
              </CardContent>
            </>
          </Card>
        ))
      ) : (
        <Box
          sx={{
            height: "40vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="group-image.jpg"
              alt="group-image"
              style={{ height: "25em", width: "auto" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" sx={{ color: "gray" }}>
              You don't belong to any group!. Start your Journey by creating
              Groups with your friend and family!!
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default GroupList;
