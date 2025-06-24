import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import LogoSlot from '../plugin-slots/LogoSlot';
import CourseInfoSlot from '../plugin-slots/CourseInfoSlot';
import { courseInfoDataShape } from './LearningHeaderCourseInfo';
import messages from './messages';
import LearningHelpSlot from '../plugin-slots/LearningHelpSlot';
var LearningHeader = function LearningHeader(_ref) {
  var courseOrg = _ref.courseOrg,
    courseNumber = _ref.courseNumber,
    courseTitle = _ref.courseTitle,
    intl = _ref.intl,
    showUserDropdown = _ref.showUserDropdown;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser;
  var headerLogo = /*#__PURE__*/React.createElement(LogoSlot, {
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard"),
    src: "https://makersasylum.com/wp-content/uploads/2021/12/logo-1.svg",
    alt: getConfig().SITE_NAME
  });
  return /*#__PURE__*/React.createElement("header", {
    className: "learning-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sr-only sr-only-focusable",
    href: "#main-content"
  }, intl.formatMessage(messages.skipNavLink)), /*#__PURE__*/React.createElement("div", {
    className: "py-2 d-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-area"
  }, headerLogo), /*#__PURE__*/React.createElement("div", {
    className: "course-title-lockup d-flex",
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(CourseInfoSlot, {
    courseOrg: courseOrg,
    courseNumber: courseNumber,
    courseTitle: courseTitle
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-1 d-flex learning-navigation",
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard")
  }, "Courses")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/dashboard/programs"
  }, "Programs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Schedule"))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-0 d-flex user-info-menu",
    style: {
      lineHeight: 1
    }
  }, showUserDropdown && authenticatedUser && /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement(AuthenticatedUserDropdown, {
    username: authenticatedUser.username
  })), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-right"
  }, showUserDropdown && !authenticatedUser && /*#__PURE__*/React.createElement(AnonymousUserMenu, null)))));
};
LearningHeader.propTypes = {
  courseOrg: courseInfoDataShape.courseOrg,
  courseNumber: courseInfoDataShape.courseNumber,
  courseTitle: courseInfoDataShape.courseTitle,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool
};
LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true
};
export default injectIntl(LearningHeader);
//# sourceMappingURL=LearningHeader.js.map