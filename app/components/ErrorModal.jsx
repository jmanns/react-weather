const React = require('react');
const ReactDom = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
  getDefaultProps() {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    let {title, message} = this.props;
    let modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    let $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDom.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render() {
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
