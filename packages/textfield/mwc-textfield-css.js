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

export const style = html`<style>
.mdc-floating-label{
    font-family:Roboto,sans-serif;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    font-size:1rem;
    line-height:1.75rem;
    font-weight:400;
    letter-spacing:.00937em;
    text-decoration:inherit;
    text-transform:inherit;
    position:absolute;
    bottom:8px;
    left:0;
    transform-origin:left top;
    transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    line-height:1.15rem;
    cursor:text
}
[dir="rtl"] .mdc-floating-label,.mdc-floating-label[dir="rtl"]{
    right:0;
    left:auto;
    transform-origin:right top
}
.mdc-floating-label--float-above{
    cursor:auto
}
.mdc-floating-label--float-above{
    transform:translateY(-100%) scale(.75)
}
.mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-standard 250ms 1
}
@keyframes mdc-floating-label-shake-float-above-standard{
    0%{
        transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75)
    }
    100%{
        transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)
    }
}
.mdc-line-ripple{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:2px;
    transform:scaleX(0);
    transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity:0;
    z-index:2
}
.mdc-line-ripple--active{
    transform:scaleX(1);
    opacity:1
}
.mdc-line-ripple--deactivating{
    opacity:0
}
.mdc-notched-outline{
    position:absolute;
    top:0;
    left:0;
    width:calc(100% - 1px);
    height:calc(100% - 2px);
    transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity:0;
    overflow:hidden
}
.mdc-notched-outline svg{
    position:absolute;
    width:100%;
    height:100%
}
.mdc-notched-outline__idle{
    position:absolute;
    top:0;
    left:0;
    width:calc(100% - 4px);
    height:calc(100% - 4px);
    transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border:1px solid;
    opacity:1
}
.mdc-notched-outline__path{
    stroke-width:1px;
    transition:stroke 150ms cubic-bezier(0.4, 0, 0.2, 1),stroke-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
    fill:transparent
}
.mdc-notched-outline--notched{
    opacity:1
}
.mdc-notched-outline--notched ~ .mdc-notched-outline__idle{
    opacity:0
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
.mdc-text-field-helper-text{
    font-family:Roboto,sans-serif;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    font-size:.75rem;
    line-height:1.25rem;
    font-weight:400;
    letter-spacing:.03333em;
    text-decoration:inherit;
    text-transform:inherit;
    margin:0;
    transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity:0;
    font-size:.75rem;
    will-change:opacity
}
.mdc-text-field+.mdc-text-field-helper-text{
    margin-bottom:8px
}
.mdc-text-field-helper-text--persistent{
    transition:none;
    opacity:1;
    will-change:initial
}
.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{
    position:absolute;
    bottom:16px;
    cursor:pointer
}
.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{
    cursor:default;
    pointer-events:none
}
.mdc-text-field{
    display:inline-block;
    position:relative;
    margin-bottom:8px;
    will-change:opacity, transform, color
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{
    border-bottom-color:rgba(0,0,0,0.42)
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{
    border-bottom-color:rgba(0,0,0,0.87)
}
.mdc-text-field .mdc-line-ripple{
    background-color:#6200ee;
    background-color:var(--mdc-theme-primary, #6200ee)
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{
    color:rgba(0,0,0,0.87)
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{
    color:rgba(0,0,0,0.6)
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{
    color:rgba(0,0,0,0.6)
}
.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-text{
    color:rgba(0,0,0,0.6)
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){
    border-bottom-color:rgba(0,0,0,0.12)
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{
    color:rgba(0,0,0,0.54)
}
.mdc-text-field__input{
    font-family:Roboto,sans-serif;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    font-size:1rem;
    line-height:1.75rem;
    font-weight:400;
    letter-spacing:.00937em;
    text-decoration:inherit;
    text-transform:inherit;
    width:100%;
    height:30px;
    padding:20px 0 1px;
    transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    border:none;
    border-bottom:1px solid;
    border-radius:0;
    background:none;
    appearance:none
}
.mdc-text-field__input::placeholder{
    transition:color 180ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity:1
}
.mdc-text-field__input:focus{
    outline:none
}
.mdc-text-field__input:invalid{
    box-shadow:none
}
.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{
    transform:translateY(-100%) scale(0.75);
    cursor:auto
}
.mdc-text-field--outlined{
    height:56px;
    border:none
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{
    border-color:rgba(0,0,0,0.24)
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__path{
    stroke:rgba(0,0,0,0.24)
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{
    border-color:rgba(0,0,0,0.87)
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{
    stroke:rgba(0,0,0,0.87)
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{
    stroke:#6200ee;
    stroke:var(--mdc-theme-primary, #6200ee)
}
.mdc-text-field--outlined .mdc-floating-label--float-above{
    transform:translateY(-130%) scale(.75)
}
.mdc-text-field--outlined .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1
}
.mdc-text-field--outlined .mdc-notched-outline{
    border-radius:4px
}
.mdc-text-field--outlined .mdc-notched-outline__idle{
    border-radius:4px
}
.mdc-text-field--outlined .mdc-text-field__input{
    display:flex;
    padding:12px;
    border:none;
    background-color:transparent;
    z-index:1
}
.mdc-text-field--outlined .mdc-floating-label{
    left:16px;
    right:initial;
    position:absolute;
    bottom:20px
}
[dir="rtl"] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir="rtl"]{
    left:initial;
    right:16px
}
.mdc-text-field--outlined .mdc-text-field__icon{
    z-index:2
}
.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__path{
    stroke-width:2px
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{
    color:rgba(0,0,0,0.6)
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__idle{
    border-color:rgba(0,0,0,0.06)
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__path{
    stroke:rgba(0,0,0,0.06)
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{
    border-bottom:none
}
.mdc-text-field--outlined.mdc-text-field--dense{
    height:48px
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{
    transform:translateY(-110%) scale(.923)
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{
    padding:12px 12px 7px
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{
    bottom:16px
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{
    top:12px
}
.mdc-text-field--box{
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color:transparent;
    will-change:transform, opacity;
    border-radius:4px 4px 0 0;
    display:inline-flex;
    position:relative;
    height:56px;
    margin-top:16px;
    overflow:hidden
}
.mdc-text-field--box::before,.mdc-text-field--box::after{
    position:absolute;
    border-radius:50%;
    opacity:0;
    pointer-events:none;
    content:""
}
.mdc-text-field--box::before{
    transition:opacity 15ms linear;
    z-index:1
}
.mdc-text-field--box.mdc-ripple-upgraded::before{
    transform:scale(var(--mdc-ripple-fg-scale, 1))
}
.mdc-text-field--box.mdc-ripple-upgraded::after{
    top:0;
    left:0;
    transform:scale(0);
    transform-origin:center center
}
.mdc-text-field--box.mdc-ripple-upgraded--unbounded::after{
    top:var(--mdc-ripple-top, 0);
    left:var(--mdc-ripple-left, 0)
}
.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation::after{
    animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards
}
.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation::after{
    animation:150ms mdc-ripple-fg-opacity-out;
    transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))
}
.mdc-text-field--box::before,.mdc-text-field--box::after{
    background-color:rgba(0,0,0,0.87)
}
.mdc-text-field--box:hover::before{
    opacity:.04
}
.mdc-text-field--box:not(.mdc-ripple-upgraded):focus::before,.mdc-text-field--box:not(.mdc-ripple-upgraded):focus-within::before,.mdc-text-field--box.mdc-ripple-upgraded--background-focused::before{
    transition-duration:75ms;
    opacity:.12
}
.mdc-text-field--box::before,.mdc-text-field--box::after{
    top:calc(50% - 100%);
    left:calc(50% - 100%);
    width:200%;
    height:200%
}
.mdc-text-field--box.mdc-ripple-upgraded::after{
    width:var(--mdc-ripple-fg-size, 100%);
    height:var(--mdc-ripple-fg-size, 100%)
}
.mdc-text-field--box:not(.mdc-text-field--disabled){
    background-color:#f5f5f5
}
.mdc-text-field--box .mdc-floating-label--float-above{
    transform:translateY(-50%) scale(.75)
}
.mdc-text-field--box .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-box 250ms 1
}
.mdc-text-field--box .mdc-text-field__input{
    align-self:flex-end;
    box-sizing:border-box;
    height:100%;
    padding:20px 16px 0
}
.mdc-text-field--box .mdc-floating-label{
    left:16px;
    right:initial;
    position:absolute;
    bottom:20px;
    width:calc(100% - 48px);
    text-overflow:ellipsis;
    white-space:nowrap;
    pointer-events:none;
    overflow:hidden;
    will-change:transform
}
[dir="rtl"] .mdc-text-field--box .mdc-floating-label,.mdc-text-field--box .mdc-floating-label[dir="rtl"]{
    left:initial;
    right:16px
}
.mdc-text-field--box.mdc-text-field--disabled{
    background-color:#fafafa;
    border-bottom:none
}
.mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__input{
    border-bottom-color:rgba(0,0,0,0.06)
}
.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-floating-label{
    color:rgba(0,0,0,0.37)
}
.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{
    color:rgba(0,0,0,0.37)
}
.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--float-above{
    transform:translateY(-70%) scale(.923)
}
.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-box-dense 250ms 1
}
.mdc-text-field--box.mdc-text-field--dense .mdc-text-field__input{
    padding:12px 12px 0
}
.mdc-text-field--with-leading-icon .mdc-text-field__icon{
    left:15px;
    right:initial
}
[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir="rtl"]{
    left:initial;
    right:15px
}
.mdc-text-field--with-leading-icon .mdc-text-field__input{
    padding-left:48px;
    padding-right:15px
}
[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__input,.mdc-text-field--with-leading-icon .mdc-text-field__input[dir="rtl"]{
    padding-left:15px;
    padding-right:48px
}
.mdc-text-field--with-leading-icon .mdc-floating-label{
    left:48px;
    right:initial
}
[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-floating-label,.mdc-text-field--with-leading-icon .mdc-floating-label[dir="rtl"]{
    left:initial;
    right:48px
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{
    transform:translateY(-130%) translateX(-32px) scale(.75)
}
[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir="rtl"]{
    transform:translateY(-130%) translateX(32px) scale(.75)
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1
}
[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir="rtl"] .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{
    transform:translateY(-110%) translateX(-21px) scale(.923)
}
[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir="rtl"]{
    transform:translateY(-110%) translateX(21px) scale(.923)
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1
}
[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir="rtl"] .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1
}
.mdc-text-field--with-trailing-icon .mdc-text-field__icon{
    left:initial;
    right:15px
}
[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir="rtl"]{
    left:15px;
    right:initial
}
.mdc-text-field--with-trailing-icon .mdc-text-field__input{
    padding-left:15px;
    padding-right:48px
}
[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__input,.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir="rtl"]{
    padding-left:48px;
    padding-right:15px
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{
    bottom:16px;
    transform:scale(0.8)
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{
    left:12px;
    right:initial
}
[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{
    left:initial;
    right:12px
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{
    padding-left:38px;
    padding-right:12px
}
[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{
    padding-left:12px;
    padding-right:38px
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{
    left:38px;
    right:initial
}
[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir="rtl"]{
    left:initial;
    right:38px
}
.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{
    left:initial;
    right:12px
}
[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{
    left:12px;
    right:initial
}
.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{
    padding-left:12px;
    padding-right:38px
}
[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{
    padding-left:38px;
    padding-right:12px
}
.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box){
    display:inline-flex;
    position:relative;
    align-items:flex-end;
    box-sizing:border-box;
    margin-top:16px
}
.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box):not(.mdc-text-field--textarea):not(.mdc-text-field--outlined){
    height:48px
}
.mdc-text-field--dense{
    margin-top:12px;
    margin-bottom:4px
}
.mdc-text-field--dense .mdc-floating-label--float-above{
    transform:translateY(-110%) scale(.923)
}
.mdc-text-field--dense .mdc-floating-label{
    font-size:.813rem
}
.mdc-text-field__input:required+.mdc-floating-label::after{
    margin-left:1px;
    content:"*"
}
.mdc-text-field--textarea{
    border-radius:4px;
    display:flex;
    width:fit-content;
    height:initial;
    transition:none;
    border:1px solid;
    overflow:hidden
}
.mdc-text-field--textarea .mdc-floating-label{
    border-radius:4px 4px 0 0
}
.mdc-text-field--textarea .mdc-text-field__input{
    border-radius:2px
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled){
    border-color:rgba(0,0,0,0.73)
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{
    border-color:rgba(0,0,0,0.73)
}
.mdc-text-field--textarea .mdc-floating-label--float-above{
    transform:translateY(-50%) scale(.923)
}
.mdc-text-field--textarea .mdc-floating-label--shake{
    animation:mdc-floating-label-shake-float-above-textarea 250ms 1
}
.mdc-text-field--textarea .mdc-text-field__input{
    margin:0;
    padding:16px;
    padding-top:32px;
    border:1px solid transparent
}
.mdc-text-field--textarea .mdc-floating-label{
    left:1px;
    right:initial;
    background-color:#fff;
    top:18px;
    bottom:auto;
    margin-top:2px;
    margin-left:8px;
    padding:8px;
    line-height:1.15
}
[dir="rtl"] .mdc-text-field--textarea .mdc-floating-label,.mdc-text-field--textarea .mdc-floating-label[dir="rtl"]{
    left:initial;
    right:1px
}
.mdc-text-field--fullwidth{
    width:100%
}
.mdc-text-field--fullwidth .mdc-text-field__input{
    resize:vertical
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){
    display:block;
    box-sizing:border-box;
    height:56px;
    margin:0;
    border:none;
    border-bottom:1px solid;
    outline:none
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{
    width:100%;
    height:100%;
    padding:0;
    resize:none;
    border:none !important
}
.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){
    border-bottom-color:#c51162
}
.mdc-text-field--dense+.mdc-text-field-helper-text{
    margin-bottom:4px
}
.mdc-text-field--box+.mdc-text-field-helper-text,.mdc-text-field--outlined+.mdc-text-field-helper-text{
    margin-right:16px;
    margin-left:16px
}
.mdc-form-field>.mdc-text-field+label{
    align-self:flex-start
}
.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{
    color:rgba(98,0,238,0.87)
}
.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{
    color:rgba(98,0,238,0.87)
}
.mdc-text-field--focused .mdc-text-field__input:required+.mdc-floating-label::after{
    color:#c51162
}
.mdc-text-field--focused+.mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){
    opacity:1
}
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled){
    border-color:#6200ee;
    border-color:var(--mdc-theme-primary, #6200ee)
}
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{
    border-color:#6200ee;
    border-color:var(--mdc-theme-primary, #6200ee)
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{
    border-bottom-color:#c51162
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{
    border-bottom-color:#c51162
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{
    background-color:#c51162
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{
    color:#c51162
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{
    color:#c51162
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{
    color:#c51162
}
.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon{
    color:#c51162
}
.mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{
    opacity:1
}
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled){
    border-color:#c51162
}
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{
    border-color:#c51162
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{
    border-color:#c51162
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__path{
    stroke:#c51162
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{
    border-color:#c51162
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{
    stroke:#c51162
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{
    stroke:#c51162
}
.mdc-text-field--disabled{
    pointer-events:none
}
.mdc-text-field--disabled .mdc-text-field__input{
    border-bottom-color:rgba(35,31,32,0.26)
}
.mdc-text-field--disabled .mdc-text-field__input{
    color:rgba(0,0,0,0.37)
}
.mdc-text-field--disabled .mdc-floating-label{
    color:rgba(0,0,0,0.37)
}
.mdc-text-field--disabled .mdc-text-field__input::placeholder{
    color:rgba(0,0,0,0.37)
}
.mdc-text-field--disabled+.mdc-text-field-helper-text{
    color:rgba(0,0,0,0.37)
}
.mdc-text-field--disabled .mdc-text-field__icon{
    color:rgba(0,0,0,0.3)
}
.mdc-text-field--disabled:not(.mdc-text-field--textarea){
    border-bottom-color:rgba(0,0,0,0.12)
}
.mdc-text-field--disabled .mdc-text-field__input{
    border-bottom:1px dotted
}
.mdc-text-field--disabled .mdc-floating-label{
    cursor:default
}
.mdc-text-field--textarea.mdc-text-field--disabled{
    border-color:rgba(35,31,32,0.26);
    background-color:#f9f9f9;
    border-style:solid
}
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input:focus{
    border-color:rgba(35,31,32,0.26)
}
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{
    border:1px solid transparent
}
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-floating-label{
    background-color:#f9f9f9
}
@keyframes mdc-floating-label-shake-float-above-text-field-box{
    0%{
        transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75)
    }
    100%{
        transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)
    }
}
@keyframes mdc-floating-label-shake-float-above-text-field-box-dense{
    0%{
        transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 0%)) translateY(-70%) scale(.923)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 0%)) translateY(-70%) scale(.923)
    }
    100%{
        transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)
    }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined{
    0%{
        transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 0%)) translateY(-130%) scale(.75)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 0%)) translateY(-130%) scale(.75)
    }
    100%{
        transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)
    }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{
    0%{
        transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 0%)) translateY(-110%) scale(.923)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 0%)) translateY(-110%) scale(.923)
    }
    100%{
        transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)
    }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{
    0%{
        transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 32px)) translateY(-130%) scale(.75)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(.75)
    }
    100%{
        transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)
    }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{
    0%{
        transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 21px)) translateY(-110%) scale(.923)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 21px)) translateY(-110%) scale(.923)
    }
    100%{
        transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)
    }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{
    0%{
        transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - -32px)) translateY(-130%) scale(.75)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(.75)
    }
    100%{
        transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)
    }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{
    0%{
        transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - -21px)) translateY(-110%) scale(.923)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - -21px)) translateY(-110%) scale(.923)
    }
    100%{
        transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)
    }
}
@keyframes mdc-floating-label-shake-float-above-textarea{
    0%{
        transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)
    }
    33%{
        animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);
        transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.923)
    }
    66%{
        animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.923)
    }
    100%{
        transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)
    }
}
.material-icons{
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
:host(:not([fullwidth])){
    display:inline-block
}

</style>`;
