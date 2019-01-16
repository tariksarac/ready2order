import React from 'react';
import { Query } from 'react-apollo';
import Ready2OrderLoader from "../Common/Ready2OrderLoader/Ready2OrderLoader";
import Info from "../Common/Info/Info";
import UsersResults from "./UsersResults/UsersResults";
import RepositoriesList from "./RepositoriesList/RepositoriesList";
import gql from 'graphql-tag';
import './GitHubUsers.scss'
import Input from "../Common/Input/Input";

const USER_QUERY = gql`
    query SearchGitHubUser($term: String!) {
        search(query: $term, first: 20, type: USER) {
            userCount
            pageInfo {
                endCursor
                hasNextPage
            }
            edges {
                node {
                    ... on User {
                        login
                        name
                        repositories(first: 50, isFork: false) {
                            totalCount
                            edges {
                                node {
                                    name
                                    stargazers {
                                        totalCount
                                    }
                                    watchers {
                                        totalCount
                                    }
                                }
                            }

                            totalCount
                        }
                        starredRepositories {
                            totalCount
                        }
                        __typename
                    }
                }
            }
        }
    }
`;

class GitHubUsers extends React.Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        searchTerm: ''
    };

    handleSelectUser = userId => {
        this.setState({ selectedUser: userId });
    };

    onSearchChange = event => this.setState({ searchTerm : event.target.value });

    render() {
        let { selectedUser, searchTerm } = this.state;
        return (
            <div className={'GitHubUsers'}>
                <Input placeholder={'Serach users'} onChange={this.onSearchChange} value={searchTerm}/>
                <Query query={USER_QUERY} variables={{ term: searchTerm }} fetchPolicy={'cache-and-network'}>
                    {({ loading, error, data }) => {
                        if (loading) return <Ready2OrderLoader />;
                        if (error) return <Info info={'Ooops something went wrong'} />;
                        let {
                            search: { edges },
                        } = data;

                        if (edges && edges.length === 0) {
                            return <Info info={'Please search users!'} />;
                        }

                        return (
                            <div >
                                <UsersResults
                                    userResults={edges}
                                    handleSelectUser={this.handleSelectUser}
                                    selectedUser={selectedUser}
                                />
                                {selectedUser ? (
                                    <RepositoriesList selectedUser={selectedUser} />
                                ) : (
                                    <Info info={'Please select user'} />
                                )}
                            </div>
                        );
                    }}
                </Query>
            </div>

        );
    }
}

export default GitHubUsers;

