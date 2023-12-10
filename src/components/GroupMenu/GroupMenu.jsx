import React, { useEffect, useState } from "react";
import GroupItem from "./GroupItem/GroupItem";
import { useAuth } from "../../services/context/auth-context";
import { createData, firestoreDB } from "../../services/firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const GroupMenu = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [allGroup, setAllGroup] = useState([]);

  const { user } = useAuth();
  const createGroup = async () => {
    try {
      setLoading(true);
      let id = uuidv4();
      await createData("groups", id, {
        id,
        groupName,
        createdAt: new Date(),
        createdBy: user.email,
        members: [user.email],
      }).then(() => {
        setLoading(false);
        setGroupName("");
        setIsCreating(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getAllGoup = async () => {
    const q = query(
      collection(firestoreDB, "groups"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      const list = querySnapshot.docs.map((doc) => doc.data());
      setAllGroup(list);
    });
  };
  useEffect(() => {
    getAllGoup()
  }, [])
  return (
    <div className="col-md-8 col-12 p-5">
      <h6>Liste des groupes de discussions</h6>
      <div className="row pb-2">
        <div className="col-md-8">
          {isCreating && (
            <input
              className="form-control"
              placeholder="Entrer le nom du groupe"
              type="text"
              onChange={(e) => setGroupName(e.target.value)}
            />
          )}
        </div>
      </div>
      <div className="row pl-3">
        <button
          onClick={() => setIsCreating(!isCreating)}
          className="btn btn-secondary"
        >
          {isCreating ? "Annuler" : "Créer"}
        </button>
        {isCreating && (
          <button onClick={createGroup} className="btn btn-success ml-3">
            {loading ? "Chargement.." : "Valider"}
          </button>
        )}
      </div>
      <div className="row">
        {
            allGroup && allGroup.map((group, idx) => (
                <GroupItem group={group} />
            ))
        }
      </div>
    </div>
  );
};

export default GroupMenu;
