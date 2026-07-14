import { GENERAL_ICP_POSTS } from './general-icp.js';
import { MISSED_CALL_POSTS } from './missed-call.js';
import { WEB_DESIGN_POSTS } from './web-design.js';
import { REACTIVATION_POSTS } from './reactivation.js';
import { MEMBERSHIP_POSTS } from './membership.js';

export const POSTS = {
  ...GENERAL_ICP_POSTS,
  ...MISSED_CALL_POSTS,
  ...WEB_DESIGN_POSTS,
  ...REACTIVATION_POSTS,
  ...MEMBERSHIP_POSTS,
};
