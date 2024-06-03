import Description from "./Description";
import Title from "./Title";

const Content = (props) => {
  console.log(props);
  return (
    <div className="content">
      <Title titleText={props.titleText} />
      <Description descText={props.descText} />
    </div>
  );
};

export default Content;
