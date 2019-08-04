import { execute } from 'apollo-link';
import gql from 'graphql-tag';

import { from, Observable } from 'rxjs';

import link from '../../shared/Link/Link';

class ProfileService {
    static getMe(): Observable<any> {
        const operation = {
            query: gql`
                query getMe {
                    me{
                        email
                        profile {
                            fullName
                            notifications
                        }
                    }
                }
            `,
        };
        return from(execute(link, operation) as any);
    }
}

export default ProfileService;