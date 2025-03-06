"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3945],{23794:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>s,data:()=>a});var n=t(6254);const i={},s=(0,t(58079).A)(i,[["render",function(e,o){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[o[8]||(o[8]=(0,n.Lk)("h1",{id:"sunricher-sr-zg9030a-mw",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zg9030a-mw"},[(0,n.Lk)("span",null,"Sunricher SR-ZG9030A-MW")])],-1)),(0,n.Lk)("table",null,[o[6]||(o[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[o[2]||(o[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"SR-ZG9030A-MW")],-1)),(0,n.Lk)("tr",null,[o[1]||(o[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Sunricher"},{default:(0,n.k6)((()=>o[0]||(o[0]=[(0,n.eW)("Sunricher")]))),_:1})])]),o[3]||(o[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Zigbee compatible ceiling mount occupancy sensor")],-1)),o[4]||(o[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"model, light_pwm_frequency, brightness_curve, start_up_on_off, motion_sensor_light_duration, motion_sensor_light_sensitivity, motion_sensor_working_mode, motion_sensor_sensing_distance, motion_sensor_microwave_switch, motion_sensor_onoff_broadcast, motion_sensor_light_state, motion_sensor_in_pwm_brightness, motion_sensor_in_pwm_output, motion_sensor_leave_pwm_output, motion_sensor_leave_delay, motion_sensor_pwm_output_after_delay, linear_error_ratio_coefficient_of_lux_measurement, fixed_deviation_of_lux_measurement, light (state, brightness), effect, power_on_behavior, occupancy, illuminance, action")],-1)),o[5]||(o[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9030A-MW.png",alt:"Sunricher SR-ZG9030A-MW"})])],-1))])]),o[9]||(o[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>o[7]||(o[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,n.Fv)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="model-enum" tabindex="-1"><a class="header-anchor" href="#model-enum"><span>Model (enum)</span></a></h3><p>Model of the device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;model&quot;: NEW_VALUE}</code>. The possible values are: <code>HK-DIM</code>, <code>ZG9030A-MW</code>.</p><h3 id="light-pwm-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#light-pwm-frequency-numeric"><span>Light pwm frequency (numeric)</span></a></h3><p>Light PWM frequency (0-65535, default: 3300). Value can be found in the published state on the <code>light_pwm_frequency</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;light_pwm_frequency&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_pwm_frequency&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="brightness-curve-enum" tabindex="-1"><a class="header-anchor" href="#brightness-curve-enum"><span>Brightness curve (enum)</span></a></h3><p>Brightness curve (default: Linear). Value can be found in the published state on the <code>brightness_curve</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_curve&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_curve&quot;: NEW_VALUE}</code>. The possible values are: <code>linear</code>, <code>gamma_logistics_1_5</code>, <code>gamma_logistics_1_8</code>.</p><h3 id="start-up-on-off-enum" tabindex="-1"><a class="header-anchor" href="#start-up-on-off-enum"><span>Start up on off (enum)</span></a></h3><p>Start up on/off (default: last_state). Value can be found in the published state on the <code>start_up_on_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;start_up_on_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;start_up_on_off&quot;: NEW_VALUE}</code>. The possible values are: <code>last_state</code>, <code>on</code>, <code>off</code>.</p><h3 id="motion-sensor-light-duration-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-light-duration-numeric"><span>Motion sensor light duration (numeric)</span></a></h3><p>Motion sensor light duration (0s-65535s, default: 5s). Value can be found in the published state on the <code>motion_sensor_light_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_light_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_light_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>s</code>.</p><h3 id="motion-sensor-light-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-light-sensitivity-numeric"><span>Motion sensor light sensitivity (numeric)</span></a></h3><p>Motion sensor light sensitivity (0-255, default: 0). Value can be found in the published state on the <code>motion_sensor_light_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_light_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_light_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="motion-sensor-working-mode-enum" tabindex="-1"><a class="header-anchor" href="#motion-sensor-working-mode-enum"><span>Motion sensor working mode (enum)</span></a></h3><p>Motion sensor working mode (default: Automatic). Value can be found in the published state on the <code>motion_sensor_working_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_working_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_working_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>automatic</code>, <code>manual</code>.</p><h3 id="motion-sensor-sensing-distance-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-sensing-distance-numeric"><span>Motion sensor sensing distance (numeric)</span></a></h3><p>Motion sensor sensing distance (0-15, default: 1). Value can be found in the published state on the <code>motion_sensor_sensing_distance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_sensing_distance&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_sensing_distance&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>15</code>.</p><h3 id="motion-sensor-microwave-switch-enum" tabindex="-1"><a class="header-anchor" href="#motion-sensor-microwave-switch-enum"><span>Motion sensor microwave switch (enum)</span></a></h3><p>Motion sensor microwave switch (default: On). Value can be found in the published state on the <code>motion_sensor_microwave_switch</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_microwave_switch&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_microwave_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="motion-sensor-onoff-broadcast-enum" tabindex="-1"><a class="header-anchor" href="#motion-sensor-onoff-broadcast-enum"><span>Motion sensor onoff broadcast (enum)</span></a></h3><p>Motion sensor on/off broadcast (default: On). Value can be found in the published state on the <code>motion_sensor_onoff_broadcast</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_onoff_broadcast&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_onoff_broadcast&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="motion-sensor-light-state-enum" tabindex="-1"><a class="header-anchor" href="#motion-sensor-light-state-enum"><span>Motion sensor light state (enum)</span></a></h3><p>Motion sensor light state (default: On). Value can be found in the published state on the <code>motion_sensor_light_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_light_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_light_state&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="motion-sensor-in-pwm-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-in-pwm-brightness-numeric"><span>Motion sensor in pwm brightness (numeric)</span></a></h3><p>Motion sensor IN PWM brightness (0-1000 lux, default: 0). Value can be found in the published state on the <code>motion_sensor_in_pwm_brightness</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_in_pwm_brightness&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_in_pwm_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>lux</code>.</p><h3 id="motion-sensor-in-pwm-output-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-in-pwm-output-numeric"><span>Motion sensor in pwm output (numeric)</span></a></h3><p>Motion sensor IN PWM output (0-254, default: 254). Value can be found in the published state on the <code>motion_sensor_in_pwm_output</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_in_pwm_output&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_in_pwm_output&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>254</code>.</p><h3 id="motion-sensor-leave-pwm-output-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-leave-pwm-output-numeric"><span>Motion sensor leave pwm output (numeric)</span></a></h3><p>Motion sensor LEAVE PWM output (0%-100%, default: 0%). Value can be found in the published state on the <code>motion_sensor_leave_pwm_output</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_leave_pwm_output&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_leave_pwm_output&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="motion-sensor-leave-delay-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-leave-delay-numeric"><span>Motion sensor leave delay (numeric)</span></a></h3><p>Motion sensor LEAVE delay (0s-65535s, default: 0s). Value can be found in the published state on the <code>motion_sensor_leave_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_leave_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_leave_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>s</code>.</p><h3 id="motion-sensor-pwm-output-after-delay-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensor-pwm-output-after-delay-numeric"><span>Motion sensor pwm output after delay (numeric)</span></a></h3><p>Motion sensor PWM output after delay (0%-100%, default: 0%). Value can be found in the published state on the <code>motion_sensor_pwm_output_after_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensor_pwm_output_after_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensor_pwm_output_after_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linear-error-ratio-coefficient-of-lux-measurement-numeric" tabindex="-1"><a class="header-anchor" href="#linear-error-ratio-coefficient-of-lux-measurement-numeric"><span>Linear error ratio coefficient of lux measurement (numeric)</span></a></h3><p>Linear error ratio coefficient of LUX measurement (100‰-10000‰, default: 1000‰). Value can be found in the published state on the <code>linear_error_ratio_coefficient_of_lux_measurement</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;linear_error_ratio_coefficient_of_lux_measurement&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;linear_error_ratio_coefficient_of_lux_measurement&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>10000</code>.</p><h3 id="fixed-deviation-of-lux-measurement-numeric" tabindex="-1"><a class="header-anchor" href="#fixed-deviation-of-lux-measurement-numeric"><span>Fixed deviation of lux measurement (numeric)</span></a></h3><p>Fixed deviation of LUX measurement (-100~100, default: 0). Value can be found in the published state on the <code>fixed_deviation_of_lux_measurement</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fixed_deviation_of_lux_measurement&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fixed_deviation_of_lux_measurement&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>.</p><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum"><span>Effect (enum)</span></a></h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="occupancy-binary-2-endpoint" tabindex="-1"><a class="header-anchor" href="#occupancy-binary-2-endpoint"><span>Occupancy (binary, 2 endpoint)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric-3-endpoint" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric-3-endpoint"><span>Illuminance (numeric, 3 endpoint)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance_3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance_3&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_to_level</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_stop</code>.</p>',60))])}]]),a=JSON.parse('{"path":"/devices/SR-ZG9030A-MW.html","title":"Sunricher SR-ZG9030A-MW control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9030A-MW control via MQTT","description":"Integrate your Sunricher SR-ZG9030A-MW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:11:47.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Model (enum)","slug":"model-enum","link":"#model-enum","children":[]},{"level":3,"title":"Light pwm frequency (numeric)","slug":"light-pwm-frequency-numeric","link":"#light-pwm-frequency-numeric","children":[]},{"level":3,"title":"Brightness curve (enum)","slug":"brightness-curve-enum","link":"#brightness-curve-enum","children":[]},{"level":3,"title":"Start up on off (enum)","slug":"start-up-on-off-enum","link":"#start-up-on-off-enum","children":[]},{"level":3,"title":"Motion sensor light duration (numeric)","slug":"motion-sensor-light-duration-numeric","link":"#motion-sensor-light-duration-numeric","children":[]},{"level":3,"title":"Motion sensor light sensitivity (numeric)","slug":"motion-sensor-light-sensitivity-numeric","link":"#motion-sensor-light-sensitivity-numeric","children":[]},{"level":3,"title":"Motion sensor working mode (enum)","slug":"motion-sensor-working-mode-enum","link":"#motion-sensor-working-mode-enum","children":[]},{"level":3,"title":"Motion sensor sensing distance (numeric)","slug":"motion-sensor-sensing-distance-numeric","link":"#motion-sensor-sensing-distance-numeric","children":[]},{"level":3,"title":"Motion sensor microwave switch (enum)","slug":"motion-sensor-microwave-switch-enum","link":"#motion-sensor-microwave-switch-enum","children":[]},{"level":3,"title":"Motion sensor onoff broadcast (enum)","slug":"motion-sensor-onoff-broadcast-enum","link":"#motion-sensor-onoff-broadcast-enum","children":[]},{"level":3,"title":"Motion sensor light state (enum)","slug":"motion-sensor-light-state-enum","link":"#motion-sensor-light-state-enum","children":[]},{"level":3,"title":"Motion sensor in pwm brightness (numeric)","slug":"motion-sensor-in-pwm-brightness-numeric","link":"#motion-sensor-in-pwm-brightness-numeric","children":[]},{"level":3,"title":"Motion sensor in pwm output (numeric)","slug":"motion-sensor-in-pwm-output-numeric","link":"#motion-sensor-in-pwm-output-numeric","children":[]},{"level":3,"title":"Motion sensor leave pwm output (numeric)","slug":"motion-sensor-leave-pwm-output-numeric","link":"#motion-sensor-leave-pwm-output-numeric","children":[]},{"level":3,"title":"Motion sensor leave delay (numeric)","slug":"motion-sensor-leave-delay-numeric","link":"#motion-sensor-leave-delay-numeric","children":[]},{"level":3,"title":"Motion sensor pwm output after delay (numeric)","slug":"motion-sensor-pwm-output-after-delay-numeric","link":"#motion-sensor-pwm-output-after-delay-numeric","children":[]},{"level":3,"title":"Linear error ratio coefficient of lux measurement (numeric)","slug":"linear-error-ratio-coefficient-of-lux-measurement-numeric","link":"#linear-error-ratio-coefficient-of-lux-measurement-numeric","children":[]},{"level":3,"title":"Fixed deviation of lux measurement (numeric)","slug":"fixed-deviation-of-lux-measurement-numeric","link":"#fixed-deviation-of-lux-measurement-numeric","children":[]},{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Effect (enum)","slug":"effect-enum","link":"#effect-enum","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Occupancy (binary, 2 endpoint)","slug":"occupancy-binary-2-endpoint","link":"#occupancy-binary-2-endpoint","children":[]},{"level":3,"title":"Illuminance (numeric, 3 endpoint)","slug":"illuminance-numeric-3-endpoint","link":"#illuminance-numeric-3-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1741269444000},"filePathRelative":"devices/SR-ZG9030A-MW.md"}')}}]);