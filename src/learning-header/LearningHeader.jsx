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

const LearningHeader = ({
  courseOrg, courseNumber, courseTitle, intl, showUserDropdown,
}) => {
  const { authenticatedUser } = useContext(AppContext);

  const headerLogo = (
    <LogoSlot
      href={`${getConfig().LMS_BASE_URL}/dashboard`}
      src="https://makersasylum.com/wp-content/uploads/2021/12/logo-1.svg"
      alt={getConfig().SITE_NAME}
    />
  );

  return (
    <header className="learning-header">
      <a className="sr-only sr-only-focusable" href="#main-content">{intl.formatMessage(messages.skipNavLink)}</a>
      <div className="py-2 d-flex">
        <div className="logo-area">
          {headerLogo}
        </div>
        <div className="course-title-lockup d-flex" style={{ lineHeight: 1 }}>
          <CourseInfoSlot courseOrg={courseOrg} courseNumber={courseNumber} courseTitle={courseTitle} />
        </div>
        <div className="flex-grow-1 d-flex learning-navigation" style={{ lineHeight: 1 }}>
          <nav>
            <ol>
              <li><a href={`${getConfig().LMS_BASE_URL}/dashboard`}>Courses</a></li>
              <li><a href={`${getConfig().LMS_BASE_URL}/dashboard/programs`}>Programs</a></li>
              <li><a href="#">Schedule</a></li>
            </ol>
          </nav>
        </div>
        <div className="flex-grow-0 d-flex user-info-menu" style={{ lineHeight: 1 }}>
          {showUserDropdown && authenticatedUser && (
          <div className="d-flex align-items-center">
            <AuthenticatedUserDropdown
              username={authenticatedUser.username}
            />
          </div>
          )}
          <div className="d-flex align-items-right">
            {showUserDropdown && !authenticatedUser && (
            <AnonymousUserMenu />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

LearningHeader.propTypes = {
  courseOrg: courseInfoDataShape.courseOrg,
  courseNumber: courseInfoDataShape.courseNumber,
  courseTitle: courseInfoDataShape.courseTitle,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool,
};

LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true,
};

export default injectIntl(LearningHeader);
