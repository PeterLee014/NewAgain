import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchFirestoreData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const collectionRef = collection(db, "phoneNumbers");

      try {
        const querySnapshot = await getDocs(collectionRef);
        const dataArr = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from Firestore</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchFirestoreData;
