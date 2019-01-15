import React from 'react';
import PropTypes from 'prop-types';
import './RepoItem.scss';

const RepoItem = ({
    repo: {
        name,
        stargazers: { totalCount: starTotalCount },
        watchers: { totalCount: watchersTotalCount },
    },
}) => {
    return (
        <div className={'RepoItem'} >
            <div className={'repo-name'}>{name}</div>
            <div className={'repo-stars'}>{`${starTotalCount} Stars • ${watchersTotalCount} Watching`}</div>
        </div>
    );
};

RepoItem.propTypes = {
    repo: PropTypes.object,
    selectedUser: PropTypes.string,
};
RepoItem.defaultProps = {};

export default RepoItem;
