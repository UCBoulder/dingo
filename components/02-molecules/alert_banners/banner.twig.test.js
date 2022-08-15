import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../util/loadYaml';
import { setupTwig } from '../../../.storybook/setupTwig';

setupTwig(Twig);

describe('banner', () => {
  it('can render a banner', async () => {
    const { container } = await render(
      join(__dirname, 'banner.twig'),
      loadYaml(join(__dirname, 'banner.yml')),
    );

    expect(container).toMatchInlineSnapshot(`
      <div>


        <div
          [object=""
          aria-label="banner"
          object]=""
        >


          <h2
            class="visually-hidden"
          >
            banner
          </h2>


          <ul
            class="banner__list"
          >


            <li
              class="banner banner--banner"
            >
              This is a banner message
            </li>


          </ul>


        </div>


        <div
          [object=""
          aria-label="warning"
          object]=""
        >


          <h2
            class="visually-hidden"
          >
            warning
          </h2>


          <ul
            class="banner__list"
          >


            <li
              class="banner banner--warning"
            >
              This is a warning message
            </li>


          </ul>


        </div>


        <div
          [object=""
          aria-label="error"
          object]=""
        >


          <div
            role="alert"
          >


            <h2
              class="visually-hidden"
            >
              error
            </h2>


            <ul
              class="banner__list"
            >


              <li
                class="banner banner--error"
              >
                This is an error message
              </li>


            </ul>


          </div>


        </div>


      </div>
    `);
  });
});
