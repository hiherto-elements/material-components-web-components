/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {html} from '@polymer/lit-element/lit-element.js';

export const style = html`<style>.material-icons{
    font-family:var(--mdc-icon-font, "Material Icons");
    font-weight:normal;
    font-style:normal;
    font-size:var(--mdc-icon-size, 24px);
    line-height:1;
    letter-spacing:normal;
    text-transform:none;
    display:inline-block;
    white-space:nowrap;
    word-wrap:normal;
    direction:ltr;
    -webkit-font-feature-settings:'liga';
    -webkit-font-smoothing:antialiased
}
@keyframes mdc-ripple-fg-radius-in{
    from{
        animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
        transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)
    }
    to{
        transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))
    }
}
@keyframes mdc-ripple-fg-opacity-in{
    from{
        animation-timing-function:linear;
        opacity:0
    }
    to{
        opacity:var(--mdc-ripple-fg-opacity, 0)
    }
}
@keyframes mdc-ripple-fg-opacity-out{
    from{
        animation-timing-function:linear;
        opacity:var(--mdc-ripple-fg-opacity, 0)
    }
    to{
        opacity:0
    }
}
.mdc-ripple-surface--test-edge-var-bug{
    --mdc-ripple-surface-test-edge-var: 1px solid #000;
    visibility:hidden
}
.mdc-ripple-surface--test-edge-var-bug::before{
    border:var(--mdc-ripple-surface-test-edge-var)
}
.mdc-button{
    font-family:Roboto,sans-serif;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    font-size:.875rem;
    line-height:2.25rem;
    font-weight:500;
    letter-spacing:.08929em;
    text-decoration:none;
    text-transform:uppercase;
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color:transparent;
    will-change:transform, opacity;
    padding:0 8px 0 8px;
    display:inline-flex;
    position:relative;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    min-width:64px;
    height:36px;
    border:none;
    outline:none;
    line-height:inherit;
    user-select:none;
    -webkit-appearance:none;
    overflow:hidden;
    vertical-align:middle;
    border-radius:2px
}
.mdc-button::before,.mdc-button::after{
    position:absolute;
    border-radius:50%;
    opacity:0;
    pointer-events:none;
    content:""
}
.mdc-button::before{
    transition:opacity 15ms linear;
    z-index:1
}
.mdc-button.mdc-ripple-upgraded::before{
    transform:scale(var(--mdc-ripple-fg-scale, 1))
}
.mdc-button.mdc-ripple-upgraded::after{
    top:0;
    left:0;
    transform:scale(0);
    transform-origin:center center
}
.mdc-button.mdc-ripple-upgraded--unbounded::after{
    top:var(--mdc-ripple-top, 0);
    left:var(--mdc-ripple-left, 0)
}
.mdc-button.mdc-ripple-upgraded--foreground-activation::after{
    animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards
}
.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{
    animation:150ms mdc-ripple-fg-opacity-out;
    transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))
}
.mdc-button::before,.mdc-button::after{
    top:calc(50% - 100%);
    left:calc(50% - 100%);
    width:200%;
    height:200%
}
.mdc-button.mdc-ripple-upgraded::after{
    width:var(--mdc-ripple-fg-size, 100%);
    height:var(--mdc-ripple-fg-size, 100%)
}
.mdc-button::-moz-focus-inner{
    padding:0;
    border:0
}
.mdc-button:active{
    outline:none
}
.mdc-button:hover{
    cursor:pointer
}
.mdc-button:disabled{
    background-color:transparent;
    color:rgba(0,0,0,0.37);
    cursor:default;
    pointer-events:none
}
.mdc-button:not(:disabled){
    background-color:transparent
}
.mdc-button:not(:disabled){
    color:#6200ee;
    color:var(--mdc-theme-primary, #6200ee)
}
.mdc-button::before,.mdc-button::after{
    background-color:#6200ee
}
@supports not (-ms-ime-align: auto){
    .mdc-button::before,.mdc-button::after{
        background-color:var(--mdc-theme-primary, #6200ee)
    }
}
.mdc-button:hover::before{
    opacity:.04
}
.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{
    transition-duration:75ms;
    opacity:.12
}
.mdc-button:not(.mdc-ripple-upgraded)::after{
    transition:opacity 150ms linear
}
.mdc-button:not(.mdc-ripple-upgraded):active::after{
    transition-duration:75ms;
    opacity:.16
}
.mdc-button.mdc-ripple-upgraded{
    --mdc-ripple-fg-opacity: .16
}
.mdc-button .mdc-button__icon{
    margin-left:0;
    margin-right:8px;
    display:inline-block;
    width:18px;
    height:18px;
    font-size:18px;
    vertical-align:top
}
[dir="rtl"] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir="rtl"]{
    margin-left:8px;
    margin-right:0
}
.mdc-button svg.mdc-button__icon{
    fill:currentColor
}
.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{
    margin-left:-4px;
    margin-right:8px
}
[dir="rtl"] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir="rtl"]{
    margin-left:8px;
    margin-right:-4px
}
.mdc-button--raised,.mdc-button--unelevated{
    padding:0 16px 0 16px
}
.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{
    background-color:rgba(0,0,0,0.12);
    color:rgba(0,0,0,0.37)
}
.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){
    background-color:#6200ee
}
@supports not (-ms-ime-align: auto){
    .mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){
        background-color:var(--mdc-theme-primary, #6200ee)
    }
}
.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){
    color:#fff;
    color:var(--mdc-theme-on-primary, #fff)
}
.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{
    background-color:#fff
}
@supports not (-ms-ime-align: auto){
    .mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{
        background-color:var(--mdc-theme-on-primary, #fff)
    }
}
.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{
    opacity:.08
}
.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{
    transition-duration:75ms;
    opacity:.24
}
.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{
    transition:opacity 150ms linear
}
.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{
    transition-duration:75ms;
    opacity:.32
}
.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{
    --mdc-ripple-fg-opacity: .32
}
.mdc-button--raised{
    box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)
}
.mdc-button--raised:hover,.mdc-button--raised:focus{
    box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)
}
.mdc-button--raised:active{
    box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)
}
.mdc-button--raised:disabled{
    box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)
}
.mdc-button--outlined{
    border-style:solid;
    padding:0 14px 0 14px;
    border-width:2px;
    line-height:32px
}
.mdc-button--outlined:disabled{
    border-color:rgba(0,0,0,0.37)
}
.mdc-button--outlined.mdc-button--dense{
    line-height:27px
}
.mdc-button--outlined:not(:disabled){
    border-color:#6200ee;
    border-color:var(--mdc-theme-primary, #6200ee)
}
.mdc-button--dense{
    height:32px;
    font-size:.8125rem;
    line-height:32px
}
:host{
    display:inline-flex;
    outline:none
}
.mdc-button{
    flex:1
}
</style>`;
