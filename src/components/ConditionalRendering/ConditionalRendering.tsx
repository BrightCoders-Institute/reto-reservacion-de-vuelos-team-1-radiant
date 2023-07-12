const ConditionalRender = ({condition, children}) => {
  return condition ? children : null;
};

export default ConditionalRender;
