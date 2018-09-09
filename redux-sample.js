// redux
const ADD = "ADD";

const addMessage = message => ({
  type: ADD,
  message: message
});

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// react
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  handleChange(event) {
    this.setState(() => ({ input: event.target.value }));
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState(() => ({ input: "" }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={e => this.handleChange(e)} />
        <br />
        <button onClick={() => this.submitMessage()}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// react-redux
const mapStateToProps = state => {
  return { messages: state };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: message => {
      dispatch(addMessage(message));
    }
  };
};

const connect = ReactRedux.connect;
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

// app with context
const Provider = ReactRedux.Provider;
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
