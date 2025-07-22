import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.log('onFirstAction fired');
  },

  //   onConsent: function ({ cookie }) {
  //     console.log('onConsent fired ...');
  //   },

  //   onChange: function ({ changedCategories, cookie }) {
  //     console.log('onChange fired ...');
  //   },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
  },

  language: {
    default: 'en',

    translations: {
      en: {
        consentModal: {
          title: 'We use cookies to enhance your experience 🍪',
          description:
            'This website uses cookies to ensure you get the best experience. ' +
            '<a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          // showPreferencesBtn: 'Manage preferences',
          //closeIconLabel: 'Close',
          /*footer: `
            <a href="#link">Privacy Policy</a>
            <a href="#link">Impressum</a>
          `,*/
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'We use cookies to power core site functionality and improve your browsing experience. ' +
                'For more details, please read our <a href="#privacy-policy" class="cc__link">Privacy Policy</a>.',
            },
            {
              title: 'Strictly necessary cookies',
              description:
                'These cookies are essential for the website to function.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Performance and Analytics cookies',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Service',
                  description: 'Description',
                  expiration: 'Expiration',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description: 'Used to distinguish users.',
                    expiration: '2 years',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description: 'Used to distinguish users.',
                    expiration: '24 hours',
                  },
                ],
              },
            },
            {
              title: 'More information',
              description:
                'For any queries in relation to my policy on cookies and your choices, please <a class="cc__link" href="#contact">contact me</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
