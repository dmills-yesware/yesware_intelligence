export class CSPHeaderRewriter {
  /**
   * Rewrites incoming Content-Security-Policy headers to allow loading of Yesware iframes
   */
  static allowYeswareDomains() {
    // NOTE: "Only one extension is allowed to redirect a request or modify a header at a time.
    // NOTE: If more than one extension attempts to modify the request, the most recently installed
    // NOTE: extension wins and all others are ignored."
    // NOTE: From https://developer.chrome.com/extensions/webRequest
    chrome.webRequest.onHeadersReceived.addListener(details => {
      if (!details.responseHeaders) {
        return details;
      }

      for (let i = 0; i < details.responseHeaders.length; i++) {
        let header = details.responseHeaders[i];

        // We only care about the Content-Security-Policy header
        if (/content-security-policy/i.test(header.name)) {
          header.value = this.modifyCSPHeader(header.value);
        }
      }

      return {
        responseHeaders: details.responseHeaders
      };
    }, {
      urls: ['<all_urls>'],
      types: ['main_frame']
    }, [
      'blocking',
      'responseHeaders'
    ]);
  }

  private static modifyCSPHeader(originalCSPHeader: string|undefined) {
    if (originalCSPHeader === undefined) {
      return originalCSPHeader;
    }

    // Add additional hosts here in order to iframe other Yesware app domains
    let iframeHosts = [
      "https://*.yesware.com",
      "https://*.yetihut.com",
    ].join(" ");

    return originalCSPHeader
      .replace('frame-src', 'frame-src ' + iframeHosts)
      .replace('form-action', 'form-action ' + iframeHosts);
  }
}
