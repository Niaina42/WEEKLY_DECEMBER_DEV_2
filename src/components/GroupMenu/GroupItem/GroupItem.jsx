import React, { useState } from "react";
import { updateData } from "../../../services/firebase/firebase";
import { useAuth } from "../../../services/context/auth-context";
import { useNavigate } from "react-router-dom";

const GroupItem = ({ group }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const isInGroup =
    group && group.members && group.members.includes(user.email);
  const joinGroup = async () => {
    try {
      setLoading(true);
      await updateData("groups", group.id, {
        members: [...group.members, user.email],
      }).then(() => {
        setLoading(false)
    });
    } catch (error) {
      console.log(error);
    }
  };
  const goToGroup = () => {
    navigation(`/group-chat/${user.uid}/${group.id}`)
  };
  return (
    <div className="col-md-5 group-item">
      <p>{group.groupName}</p>
      {!isInGroup ? (
        <button onClick={joinGroup} className="btn btn-sm btn-info text-end">
          {loading ? "Chargement.." : "Rejoindre"}
        </button>
      ) : (
        <button onClick={goToGroup} className="btn btn-sm btn-info text-end">
          Voir les messages
        </button>
      )}
    </div>
  );
};
export default GroupItem;