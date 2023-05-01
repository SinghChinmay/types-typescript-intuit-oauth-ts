declare module 'intuit-oauth' {
  class OAuthClient {
    constructor(config: {
      clientId: string;
      clientSecret: string;
      environment: string;
      redirectUri: string;
    });

    static scopes: {
      Accounting: string;
    };

    authorizeUri(options: { scope: string[]; state?: string }): string;
    createToken(url: string): Promise<OAuthToken>;
    refreshUsingToken(token: string): Promise<OAuthToken>;
  }

  export interface OAuthToken {
    token: {
      access_token: string;
      refresh_token: string;
      expires_in: number;
      x_refresh_token_expires_in: number;
      createdAt: number;
    };
  }

  export default OAuthClient;
}
