require('@babel/register')

const mjml2html = require('./packages/mjml/src/index')

const xml = `
<mjml lang="hello">
<mj-head>

<mj-attributes>
<mj-all font-family="Arial" />
<mj-all font-size="16px" />
</mj-attributes>
</mj-head>

<mj-body><mj-a9-container border="1px solid #000000" padding="50px 30px"><mj-text><p>{{mail-greeting}}Claim your additional 10% discount (last day) 😀{{/mail-greeting}}</p>

<p>It looks like you have yet to complete your {{product_obj.lesson_description}} purchase. Confirm your order today and {{strong}}get an extra 10% off {{/strong}} by using the {{strong}}{{discount_code}} code{{/strong}}.</p>

<p>Redeem the discount code on the order summary of our online shop. It will expire in a few days, so don&#39;t miss out!</p>

<p>{{center}}{{buttonred={{userobj.get_shoplink}}}}Claim my discount{{/buttonred}}{{/center}}</p>

<p>💡 You have 15 days to change your mind and cancel your subscription, no questions asked!</p>

<p>Any questions? Visit {{link={{userobj.get_help_link}}}}online-help{{/link}} or answer this email.</p>

<p>See you soon,<br />
{{multi_product_signature}}</p>

<p><br />
{{- - -}}<br />
{{center}}What our users say about us{{/center}}</p>
</mj-text><mj-section><mj-column><mj-text><p>{{image=https://fastly-a9fast-com.freetls.fastly.net/www.gymglish.com/images/newsletter/user-stories-1.jpeg /}}</p>
</mj-text></mj-column><mj-column><mj-text><p>{{gray}}&ldquo;{{product_obj.lesson_description}} has become a special part of my daily routine - I&rsquo;m kind of addicted! I love the original stories and the fact that I have fun while I&rsquo;m learning.&rdquo;<br />
Cathy, France<br />
{{/gray}}</p>
</mj-text></mj-column></mj-section><mj-section><mj-column><mj-text><p>{{image=https://fastly-a9fast-com.freetls.fastly.net/www.gymglish.com/images/newsletter/user-stories-3.jpeg /}}</p>
</mj-text></mj-column><mj-column><mj-text><p>{{gray}}<br />
&quot;An exciting, intuitive and creative approach to language learning! Each lesson is a building block for the future, tailored to my needs - thank you for developing such a wonderful learning program!&rdquo;<br />
Linda, USA<br />
{{/gray}}</p>
</mj-text></mj-column></mj-section><mj-section><mj-column><mj-text><p>{{image=https://fastly-a9fast-com.freetls.fastly.net/www.gymglish.com/images/newsletter/user-stories-3.jpeg /}}</p>
</mj-text></mj-column><mj-column><mj-text><p>{{gray}}<br />
&ldquo;{{product_obj.lesson_description}} is by far the most engaging and effective language tool I have encountered. It&rsquo;s really helped me improve my comprehension and grammar. Thank you for reviving my language skills after many years of disuse!&rdquo;<br />
Randall, China{{/gray}}</p>
</mj-text></mj-column></mj-section></mj-a9-container></mj-body></mjml>
`

console.time('mjml2html')

const { html } = mjml2html(xml, {
  beautify: true,
})

console.timeEnd('mjml2html')

if (process.argv.includes('--output')) {
  console.log(html)
}

if (process.argv.includes('--open')) {
  const open = require('open')
  const path = require('path')
  const fs = require('fs')

  const testFile = path.resolve(__dirname, './test.html')

  fs.writeFileSync(testFile, html)

  open(testFile)
}
