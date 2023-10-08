import Card from "../cards/Card";

const Special = ({ data }) => {
  return (
    <section id="special" className="mb-3">
      <h2>This Week Specials!</h2>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
};

export default Special;
