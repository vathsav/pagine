import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';

// Components
import AddPost from './containers/add-post';
import AddTag from './containers/add-tag';
import NavigationMenu from './components/navigation/navigation-menu';
import ListBlog from './containers/list-blog';
import ListPortfolio from './containers/list-porfolio';
import AddPortfolioItem from './containers/add-portfolio-item';

// Utils
import {
  ADMIN_VIEW_BLOG_POSTS,
  ADMIN_VIEW_CREATE_BLOG_POST,
  ADMIN_VIEW_CREATE_PORTFOLIO_ITEM, ADMIN_VIEW_CREATE_TAG,
  ADMIN_VIEW_PORTFOLIO,
} from '../../utils/constants';


class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: null,
    };

    this.updateView = this.updateView.bind(this);
  }

  updateView(view) {
    this.setState({ view });
  }

  render() {
    const { view } = this.state;
    const selectedComponent = [];

    switch (view) {
      case ADMIN_VIEW_CREATE_BLOG_POST:
        selectedComponent.push(<AddPost key="add-post" />);
        break;
      case ADMIN_VIEW_CREATE_PORTFOLIO_ITEM:
        selectedComponent.push(<AddPortfolioItem key="add-portfolio" />);
        break;
      case ADMIN_VIEW_CREATE_TAG:
        selectedComponent.push(<AddTag key="add-tag" />);
        break;
      case ADMIN_VIEW_BLOG_POSTS:
        selectedComponent.push(<ListBlog key="view-blog" />);
        break;
      case ADMIN_VIEW_PORTFOLIO:
        selectedComponent.push(<ListPortfolio key="view-portfolio" />);
        break;
      default:
        // Show add post by default
        selectedComponent.push(<AddPost key="add" />);
        break;
    }

    return (
      <Container fluid>
        <Row>
          <Col md={3} className="p-0 vh-100 position-fixed">
            <NavigationMenu updateView={this.updateView} />
          </Col>
          <Col md={9} className="offset-3">
            {selectedComponent}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default firestoreConnect()(AdminPanel);
