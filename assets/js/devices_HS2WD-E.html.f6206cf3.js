"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[69742],{59001:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>d});var a=o(6254);const i={},n=(0,o(58079).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"heiman-hs2wd-e",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#heiman-hs2wd-e"},[(0,a.Lk)("span",null,"HEIMAN HS2WD-E")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"HS2WD-E")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=HEIMAN"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("HEIMAN")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart siren")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, max_duration, warning")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HS2WD-E.png",alt:"HEIMAN HS2WD-E"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Push the included pin in the small hole on the case of the device and hold for ~5 seconds until the LED starts flashing.</p><h3 id="triggering-the-alarm" tabindex="-1"><a class="header-anchor" href="#triggering-the-alarm"><span>Triggering the alarm</span></a></h3><p>The alarm can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> message <code>{&quot;warning&quot;: {&quot;duration&quot;: 10, &quot;mode&quot;: &quot;emergency&quot;, &quot;strobe&quot;: false}}</code>.</p><p>Where:</p><ul><li><code>duration</code>: the number of seconds the alarm will be on (max is 1800 seconds)</li><li><code>mode</code>: <code>stop</code> or <code>emergency</code></li><li><code>strobe</code>: <code>true</code> or <code>false</code> will let the strobe flash once during the alarm</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="max-duration-numeric" tabindex="-1"><a class="header-anchor" href="#max-duration-numeric"><span>Max duration (numeric)</span></a></h3><p>Max duration of Siren. Value can be found in the published state on the <code>max_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE, &quot;mode&quot;: VALUE}}</code></p><ul><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>emergency</code></li></ul>',15))])}]]),d=JSON.parse('{"path":"/devices/HS2WD-E.html","title":"HEIMAN HS2WD-E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"HEIMAN HS2WD-E control via MQTT","description":"Integrate your HEIMAN HS2WD-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Triggering the alarm","slug":"triggering-the-alarm","link":"#triggering-the-alarm","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Max duration (numeric)","slug":"max-duration-numeric","link":"#max-duration-numeric","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]}]}],"git":{"updatedTime":1741269444000},"filePathRelative":"devices/HS2WD-E.md"}')}}]);