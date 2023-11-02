export default function UserCard({name, userName, img}) {
  return (
    <div className="user-card">
      <div>
        <img src ={img} alt={"nice"} />
      </div>
      <div>
        <h5> Name: {name}</h5>

        <p> Username: {userName}</p>
      </div>
    </div>
  );
}
