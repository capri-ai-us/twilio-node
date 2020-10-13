/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Accounts = require('./Accounts');
import Api = require('./Api');
import Autopilot = require('./Autopilot');
import Bulkexports = require('./Bulkexports');
import Chat = require('./Chat');
import Conversations = require('./Conversations');
import Events = require('./Events');
import Fax = require('./Fax');
import FlexApi = require('./FlexApi');
import Insights = require('./Insights');
import IpMessaging = require('./IpMessaging');
import Lookups = require('./Lookups');
import Messaging = require('./Messaging');
import Monitor = require('./Monitor');
import Notify = require('./Notify');
import Numbers = require('./Numbers');
import Preview = require('./Preview');
import Pricing = require('./Pricing');
import Proxy = require('./Proxy');
import RequestClient = require('../base/RequestClient');
import Serverless = require('./Serverless');
import Studio = require('./Studio');
import Supersim = require('./Supersim');
import Sync = require('./Sync');
import Taskrouter = require('./Taskrouter');
import Trunking = require('./Trunking');
import Verify = require('./Verify');
import Video = require('./Video');
import Voice = require('./Voice');
import Wireless = require('./Wireless');

declare class Twilio {
  /**
   * Twilio Client to interact with the Rest API
   *
   * @param username - The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
   * @param password - The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
   * @param opts - The options argument
   */
  constructor(username: string, password: string, opts?: Twilio.TwilioClientOptions);

  accounts: Accounts;
  addresses: (typeof Api.prototype.account.addresses);
  api: Api;
  applications: (typeof Api.prototype.account.applications);
  authorizedConnectApps: (typeof Api.prototype.account.authorizedConnectApps);
  autopilot: Autopilot;
  availablePhoneNumbers: (typeof Api.prototype.account.availablePhoneNumbers);
  balance: (typeof Api.prototype.account.balance);
  bulkexports: Bulkexports;
  calls: (typeof Api.prototype.account.calls);
  chat: Chat;
  conferences: (typeof Api.prototype.account.conferences);
  connectApps: (typeof Api.prototype.account.connectApps);
  conversations: Conversations;
  events: Events;
  fax: Fax;
  flexApi: FlexApi;
  httpClient?: RequestClient;
  incomingPhoneNumbers: (typeof Api.prototype.account.incomingPhoneNumbers);
  insights: Insights;
  ipMessaging: IpMessaging;
  keys: (typeof Api.prototype.account.keys);
  lookups: Lookups;
  messages: (typeof Api.prototype.account.messages);
  messaging: Messaging;
  monitor: Monitor;
  newKeys: (typeof Api.prototype.account.newKeys);
  newSigningKeys: (typeof Api.prototype.account.newSigningKeys);
  notifications: (typeof Api.prototype.account.notifications);
  notify: Notify;
  numbers: Numbers;
  outgoingCallerIds: (typeof Api.prototype.account.outgoingCallerIds);
  preview: Preview;
  pricing: Pricing;
  proxy: Proxy;
  queues: (typeof Api.prototype.account.queues);
  recordings: (typeof Api.prototype.account.recordings);
  /**
   * Makes a request to the Twilio API using the configured http client.
   * Authentication information is automatically added if none is provided.
   *
   * @param opts - The options argument
   */
  request(opts: Twilio.RequestOptions): Promise<any>;
  serverless: Serverless;
  shortCodes: (typeof Api.prototype.account.shortCodes);
  signingKeys: (typeof Api.prototype.account.signingKeys);
  sip: (typeof Api.prototype.account.sip);
  studio: Studio;
  supersim: Supersim;
  sync: Sync;
  taskrouter: Taskrouter;
  tokens: (typeof Api.prototype.account.tokens);
  transcriptions: (typeof Api.prototype.account.transcriptions);
  trunking: Trunking;
  usage: (typeof Api.prototype.account.usage);
  /**
   * Validates that a request to the new SSL certificate is successful.
   *
   * @throws {RestException} if the request fails
   */
  validateSslCert(): Promise<any>;
  validationRequests: (typeof Api.prototype.account.validationRequests);
  verify: Verify;
  video: Video;
  voice: Voice;
  wireless: Wireless;
}

declare namespace Twilio {

  /**
   * Options for the request
   *
   * @property allowRedirects - Should the client follow redirects
   * @property data - The request data
   * @property debug - Show debug logs
   * @property headers - The request headers
   * @property method - The http method
   * @property params - The request params
   * @property password - The password used for auth
   * @property timeout - The request timeout in milliseconds
   * @property uri - The request uri
   * @property username - The username used for auth
   */
  export interface RequestOptions {
    allowRedirects?: boolean;
    data?: object;
    debug?: boolean;
    headers?: object;
    method: string;
    params?: object;
    password?: string;
    timeout?: number;
    uri: string;
    username?: string;
  }

  /**
   * Options to pass to the Twilio Client constructor
   *
   * @property accountSid - The default accountSid. This is set to username if not provided
   * @property debug - Debug logs will be shown. Defaults to none
   * @property edge - Twilio edge to use. Defaults to none
   * @property env - The environment object. Defaults to process.env
   * @property httpClient - The client used for http requests. Defaults to RequestClient
   * @property lazyLoading - Enable lazy loading, loading time will decrease if enabled
   * @property region - Twilio region to use. Defaults to us1 if edge defined
   */
  export interface TwilioClientOptions {
    accountSid?: string;
    debug?: boolean;
    edge?: string;
    env?: object;
    httpClient?: RequestClient;
    lazyLoading?: boolean;
    region?: string;
  }
}

export = Twilio;
