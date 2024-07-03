import { BodyComponent } from 'mjml-core'

export default class MjA9Container extends BodyComponent {
  static componentName = 'mj-a9-container'

  static allowedAttributes = {}

  static defaultAttributes = {}

  headStyle = () => `
    @media screen and (max-width: 767.98px) {
      .mobile-table {
        width: 100% !important;
      }
    }
  `

  render() {
    const templateName = this.getAttribute('template-name')
    let headerHTML = ''
    let footerHTML = ''
    let trackingHTML = ''
    let backgroundColor = ''
    if (templateName !== 'no-background') {
      backgroundColor = 'background-color: #F8F8F8; '
    }
    if (templateName !== 'partner') {
      headerHTML = `
      <tr>
        <td style="padding: 20px 0px 20px 0px;">
          <table>
            <tr>
              <td align="center" height="100%" style="margin: auto; padding: 0; height: 100%; vertical-align:middle;" valign="middle">
                <img src="{{mail_logo_url}}?h=80" height="40"{% if product_obj %} alt="{{product_obj.lesson_description}}"{% endif %} />
              </td>
              {{PARTNERLOGO}}
            </tr>
          </table>
        </td>
      </tr>
    `

      footerHTML = `
      <tr>
        <td align="center" valign="middle" height="30" style="font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 10px; padding: 20px 0px;">
          {{FOOTER}}
        </td>
      </tr>
    `

      trackingHTML = '{{TRACKING_IMAGE}}'
    }

    return `
    <center>
      <table class="mobile-table" border="0" cellspacing="0" cellpadding="0" width="600" align="center"{{DIRECTION}}>
        ${headerHTML}
        <tr style="${backgroundColor}font-size: 1rem;">
          <td valign="top" style="padding: 30px 30px 30px 30px; font-family: 'Open Sans', Helvetica, Arial, sans-serif;">
            ${this.renderChildren()}
          </td>
        </tr>
        ${footerHTML}
      </table>
        ${trackingHTML}
    </center>
    `
  }
}
