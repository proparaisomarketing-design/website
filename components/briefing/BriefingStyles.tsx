'use client'

export default function BriefingStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&family=Roboto:wght@700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      
      @font-face {
        font-family: 'MADE Outer Sans';
        src: local('MADE Outer Sans Bold'),
             local('MADE-Outer-Sans-Bold'),
             local('MADE Outer Sans');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      
      /* Garantir que o body e html permitam scroll para sticky funcionar */
      html {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
      }
      
      body {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
      }
      
      /* Remover overflow do main do layout do Next.js na página de briefing */
      main.min-h-screen {
        overflow: visible;
        height: auto;
      }
      
      .briefing-container * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .briefing-container h2 {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
      }

      .briefing-container .bebas-neue-regular {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
      }

      .briefing-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #ffffff;
        min-height: 100vh;
        color: #e2e2e2;
        padding: 0;
        margin: 0;
        position: relative;
        overflow-x: hidden;
        overflow-y: visible;
      }

      /* Círculos desfocados nas laterais */
      .blur-circle-left,
      .blur-circle-right,
      .blur-circle-center {
        position: fixed;
        width: 2500px;
        height: 2500px;
        border-radius: 9999px;
        filter: blur(300px);
        pointer-events: none;
        z-index: 0;
      }

      @keyframes moveUpDown {
        0%, 100% { transform: translateY(-60%); }
        50% { transform: translateY(-40%); }
      }

      @keyframes moveDownUp {
        0%, 100% { transform: translateY(-40%); }
        50% { transform: translateY(-60%); }
      }

      @keyframes moveCenter {
        0%, 100% { transform: translate(-50%, -50%); }
        50% { transform: translate(-50%, -45%); }
      }

      .blur-circle-left {
        background: rgba(0, 26, 255, 0.103);
        box-shadow: none;
        left: -900px;
        top: 0%;
        animation: moveUpDown 8s ease-in-out infinite;
      }

      .blur-circle-right {
        background: rgba(0, 255, 0, 0.082);
        box-shadow: none;
        right: -900px;
        top: 0%;
        animation: moveDownUp 10s ease-in-out infinite;
      }

      .blur-circle-center {
        background: rgba(239, 245, 255, 0);
        box-shadow: none;
        left: 50%;
        top: 50%;
        animation: moveCenter 12s ease-in-out infinite;
      }

      .briefing-container .container {
        max-width: 100%;
        width: 100%;
        margin: 0;
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: visible;
      }

      .briefing-container .section:not(.active) {
        display: none;
      }

      .briefing-container .section.active {
        display: block !important;
        animation: fadeIn 0.6s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.98);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .briefing-container .section h2 {
        font-family: "Bebas Neue", sans-serif;
        color: #000000;
        font-size: 2rem;
        margin-bottom: 16px;
        text-align: left;
        font-weight: 400;
        font-style: normal;
      }

      .briefing-container .section p {
        color: #000000;
        text-align: left;
        margin-bottom: 40px;
        font-size: 1.05rem;
        line-height: 1.7;
      }

      .briefing-container .question-card {
        background: linear-gradient(135deg, rgba(0, 55, 254, 1.25), rgba(0, 255, 0, 0.5));
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        padding: 32px;
        margin-bottom: 24px;
        box-shadow: none;
        animation: fadeIn 0.6s ease-out;
        transition: transform 0.2s ease;
        cursor: pointer;
        overflow: visible;
      }

      .briefing-container .question-card:hover {
        transform: translateY(-4px);
        box-shadow: none;
        border-color: rgba(255, 255, 255, 0.25);
      }

      .briefing-container .question-header {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 20px;
      }

      .briefing-container .question-icon {
        width: 56px;
        height: 56px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 1.8rem;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 16px rgba(0, 55, 254, 0.3);
        background: rgba(255, 255, 255, 0.2);
      }

      .briefing-container .question-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 8px;
      }

      .briefing-container .question-header h2 {
        font-family: "Bebas Neue", sans-serif;
        font-size: 23px;
        color: #ffffff;
        font-weight: 400;
        font-style: normal;
        margin-bottom: 8px;
      }

      .briefing-container .question-description {
        color: #ffffff;
        font-size: 0.98rem;
        line-height: 1.6;
      }

      .briefing-container .question-textarea {
        width: 100%;
        min-height: 140px;
        padding: 20px;
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        font-size: 16px;
        font-family: inherit;
        resize: vertical;
        background: rgba(255, 255, 255, 0.95);
        color: #000000;
        transition: all 0.3s ease;
        box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      .briefing-container .question-textarea:focus {
        outline: none;
        border-color: #0037FE;
        box-shadow: 
          0 0 0 4px rgba(0, 55, 254, 0.15),
          0 0 20px rgba(0, 55, 254, 0.3),
          inset 0 2px 8px rgba(0, 0, 0, 0.05);
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
      }

      .briefing-container .form-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
        margin-top: 16px;
      }

      @media (min-width: 768px) {
        .briefing-container .form-grid {
          grid-template-columns: 1fr 1fr;
        }
        .briefing-container .form-group.wide {
          grid-column: 1 / -1;
        }
      }

      .briefing-container .form-group {
        display: flex;
        flex-direction: column;
      }

      .briefing-container .form-group label {
        font-weight: 600;
        margin-bottom: 8px;
        color: #ffffff;
        font-size: 0.95rem;
      }

      .briefing-container .num {
        background: rgba(255, 255, 255, 0.3);
        color: #ffffff;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 20px;
        margin-right: 8px;
        font-size: 0.85rem;
      }

      .briefing-container .form-group input,
      .briefing-container .form-group select,
      .briefing-container .form-group textarea {
        width: 100%;
        height: 48px;
        padding: 12px 16px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.95);
        color: #000000;
        font: inherit;
        outline: none;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        box-sizing: border-box;
      }

      .briefing-container .form-group input:focus,
      .briefing-container .form-group select:focus,
      .briefing-container .form-group textarea:focus {
        border-color: #ffffff;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 1);
      }

      .briefing-container .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        padding: 28px;
        background: rgba(0, 47, 255, 0.8);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 20px;
        box-shadow: 
          0 8px 24px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.05);
      }

      .briefing-container .nav-button {
        background: linear-gradient(135deg, #0037FE 0%, #00FF00 100%);
        color: white;
        padding: 11px 27px;
        border: none;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 
          0 6px 20px rgba(0, 55, 254, 0.4),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
      }

      .briefing-container .nav-button:hover {
        transform: translateY(-4px);
        box-shadow: 
          0 12px 32px rgba(0, 55, 254, 0.5),
          0 0 40px rgba(240, 240, 240, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.3);
      }

      .briefing-container .nav-button:disabled {
        background: rgba(255, 255, 255, 0.1);
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      /* Main Layout */
      .briefing-container .main-layout {
        display: flex;
        flex-direction: row;
        gap: 20px;
        min-height: 100vh;
        max-width: 1366px;
        margin: 10px auto;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        align-items: stretch;
        position: relative;
        z-index: 1;
      }

      .briefing-container .sidebar {
        width: 340px;
        min-width: 340px;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.87), rgba(255, 255, 255, 1));
        border: 2px solid rgba(255, 255, 255, 0.4);
        overflow: hidden;
        border-radius: 20px;
        box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.007);
        outline: 1px #F1F2F9 solid;
        outline-offset: -1px;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        display: flex;
        position: sticky;
        top: 20px;
        height: fit-content;
        max-height: calc(100vh - 30px);
        z-index: 1;
        flex-shrink: 0;
      }

      .briefing-container .main-content {
        flex: 1;
        min-width: 0;
        padding: 15px;
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
      }

      .briefing-container .form-container {
        background: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        border: none;
        border-radius: 0;
        padding: 10px;
        color: #000000;
        box-shadow: none;
      }

      /* Info Box Styles */
      .briefing-container .info-box {
        width: 100%;
        max-width: 900px;
        margin: 0 auto 30px auto;
        padding: 40px;
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 20px;
        box-shadow: none;
        display: flex;
        flex-direction: column;
        gap: 0;
        box-sizing: border-box;
        animation: fadeIn 0.6s ease-out;
        transition: transform 0.2s ease;
        cursor: pointer;
      }

      .briefing-container .info-box:active {
        transform: scale(1.1);
      }

      .briefing-container .info-box-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
      }

      .briefing-container .info-box-icon-circle {
        width: 60px;
        height: 60px;
        min-width: 60px;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .briefing-container .info-box-icon {
        font-size: 30px;
        line-height: 1;
      }

      .briefing-container .info-box-icon svg {
        width: 40px;
        height: 40px;
        display: block;
      }

      .briefing-container .info-box-title {
        font-size: 35px;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        line-height: 1.3;
        margin: 0;
      }

      .briefing-container .info-box-text {
        color: #4E4E4E;
        font-size: 15px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        line-height: 1.7;
        margin: 0 0 5px 0 !important;
        padding: 0;
      }

      .briefing-container .info-box-list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 0 !important;
        margin-top: 10px !important;
        padding: 0;
      }

      .briefing-container .info-box-list-item {
        display: flex;
        align-items: flex-start;
        gap: 5px;
      }

      .briefing-container .info-box-list-check {
        font-size: 16px;
        flex-shrink: 0;
        margin-top: 1px;
      }

      .briefing-container .info-box-list-text {
        font-size: 15px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: inherit;
      }

      /* Box Verde */
      .briefing-container .info-box-green {
        background: rgb(64, 255, 0);
        border: 1px solid rgba(228, 228, 228, 0.829);
      }

      .briefing-container .info-box-green .info-box-title {
        color: #0037FE;
      }

      .briefing-container .info-box-green .info-box-icon {
        color: #0037FE;
      }

      .briefing-container .info-box-green .info-box-text {
        color: #0037FE;
        margin-top: 5px;
      }

      .briefing-container .info-box-green .info-box-list-check,
      .briefing-container .info-box-green .info-box-list-text {
        color: #0037FE;
      }

      /* Box Glassmorphism Branco */
      .briefing-container .info-box-white {
        background: rgb(17, 0, 255);
        border: 1px solid rgba(9, 115, 255, 0.7);
        backdrop-filter: blur(18.60px);
        -webkit-backdrop-filter: blur(18.60px);
      }

      .briefing-container .info-box-white .info-box-title {
        color: #ffffff;
      }

      .briefing-container .info-box-white .info-box-icon {
        color: #ffffff;
      }

      .briefing-container .info-box-white .info-box-text {
        color: #ffffff;
      }

      .briefing-container .info-box-white .info-box-list-check,
      .briefing-container .info-box-white .info-box-list-text {
        color: #00ffff;
      }

      /* Box Azul */
      .briefing-container .info-box-blue {
        background: rgb(64, 255, 0);
        border: 1px solid rgba(228, 228, 228, 0.829);
      }

      .briefing-container .info-box-blue .info-box-title {
        color: #0037FE;
      }

      .briefing-container .info-box-blue .info-box-icon {
        color: #ffffff;
      }

      .briefing-container .info-box-blue .info-box-text {
        color: #0037FE;
      }

      .briefing-container .info-box-blue .info-box-list-check,
      .briefing-container .info-box-blue .info-box-list-text {
        color: #0037FE;
      }

      /* Creator Button */
      .briefing-container .creator-button {
        background: linear-gradient(135deg, #00FF00 0%, #0037FE 100%);
        color: #ffffff;
        padding: 5px 18px;
        border: none;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow:
          0 6px 20px rgba(0, 55, 254, 0.45),
          0 0 25px rgba(0, 255, 0, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 0.25);
        position: relative;
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-top: 10px;
      }

      .briefing-container .creator-button:hover {
        transform: translateY(-4px) scale(1.01);
        box-shadow:
          0 14px 36px rgba(0, 55, 254, 0.55),
          0 0 45px rgba(0, 255, 0, 0.35),
          inset 0 1px 0 rgba(255, 255, 255, 0.35);
      }

      .briefing-container .creator-button-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
      }

      .briefing-container .creator-button svg {
        width: 26px;
        height: 26px;
      }

      /* Resource CTA */
      .briefing-container .resource-cta {
        margin: 0 auto 35px;
        max-width: 900px;
        text-align: center;
      }

      .briefing-container .resource-cta p {
        margin-bottom: 18px;
        font-size: 0.98rem;
        color: #0037FE;
      }

      .briefing-container .resource-button {
        background: linear-gradient(135deg, #0037FE 0%, #00FF00 100%);
        color: #ffffff;
        padding: 10px 10px;
        border: none;
        border-radius: 50px;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow:
          0 8px 26px rgba(0, 55, 254, 0.089),
          0 0 30px rgba(0, 255, 0, 0.048),
          inset 0 1px 0 rgba(255, 255, 255, 0.25);
        position: relative;
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .briefing-container .resource-button:hover {
        transform: translateY(-4px) scale(1.01);
        box-shadow:
          0 16px 38px rgba(0, 55, 254, 0.55),
          0 0 48px rgba(0, 255, 0, 0.35),
          inset 0 1px 0 rgba(255, 255, 255, 0.35);
      }

      .briefing-container .resource-button svg {
        width: 24px;
        height: 24px;
      }

      /* Sidebar Styles */
      .briefing-container .sidebar-elements {
        align-self: stretch;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 0;
        display: flex;
        padding: 10px 10px;
        min-height: 0;
      }

      .briefing-container .top-content {
        align-self: stretch;
        padding: 10px 10px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
        display: flex;
      }

      .briefing-container .steps-container {
        width: 100%;
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0px;
        display: flex;
        padding: 25px;
        margin-bottom: 20px;
        flex: 0 1 auto;
        min-height: 0;
      }

      .briefing-container .step-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        position: relative;
      }

      .briefing-container .steps {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        transition: all 0.1s ease;
        width: 100%;
        padding: 0;
        min-height: 15px;
      }

      .briefing-container .steps:hover {
        transform: translateX(2px);
      }

      .briefing-container .step-dot {
        width: 15px;
        height: 15px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        position: relative;
      }

      .briefing-container .step-dot[data-svg-wrapper],
      .briefing-container .step-dot div[data-svg-wrapper] {
        width: 39px;
        height: 39px;
      }

      .briefing-container .step-dot svg {
        width: 39px;
        height: 39px;
      }

      .briefing-container .step-dot.completed {
        background: #1eff00;
        border-radius: 20px;
        width: 40px;
        height: 40px;
      }

      .briefing-container .step-dot.active {
        background: transparent;
        border: none;
        width: 40px;
        height: 20px;
      }

      .briefing-container .step-dot.future {
        background: transparent;
        border: none;
        width: 40px;
        height: 40px;
      }

      .briefing-container .step-texts {
        width: 280px;
        padding-top: 5px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        display: inline-flex;
        transition: all 0.3s ease;
      }

      .briefing-container .step-texts h4 {
        font-size: 0.75rem;
        font-weight: 400;
        margin: 2px;
        padding: 2px;
        line-height: 1.2;
      }

      .briefing-container .step-texts h3 {
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        line-height: 1.3;
      }

      .briefing-container .step-title.completed {
        color: #00FF00;
        opacity: 1;
      }

      .briefing-container .step-title.completed h4 {
        color: #00FF00;
        opacity: 1;
      }

      .briefing-container .step-title.completed h3 {
        color: #00FF00;
        opacity: 1;
      }

      .briefing-container .step-title.active {
        color: #1100ff;
        opacity: 1;
      }

      .briefing-container .step-title.active h4 {
        color: #1100ff;
        opacity: 1;
        font-weight: 400;
      }

      .briefing-container .step-title.active h3 {
        color: #1100ff;
        opacity: 1;
        font-weight: 700;
      }

      .briefing-container .step-title.future {
        color: #15ff00;
        opacity: 1;
      }

      .briefing-container .step-title.future h4 {
        color: #00ff22;
      }

      .briefing-container .step-title.future h3 {
        color: #0400ff;
        opacity: 0.8;
      }

      .briefing-container .process-bar {
        width: 3px;
        height: 20px;
        margin-left: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 20px;
      }

      .briefing-container .process-bar svg {
        width: 3px;
        height: 20px;
        min-height: 20px;
        display: block;
      }

      .briefing-container .process-bar svg rect {
        width: 3px;
        height: 20px;
      }

      .briefing-container .process-bar.active svg rect {
        fill: #00FF00;
      }

      .briefing-container .process-bar:not(.active) svg rect {
        fill: #CFD6DC;
      }

      .briefing-container .bottom-wrapper {
        align-self: stretch;
        padding: 24px 24px;
        padding-bottom: 20px;
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        display: flex;
        margin-top: 20px;
        gap: 10px;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        flex-shrink: 0;
        z-index: 1;
      }

      .briefing-container .help-content {
        justify-content: flex-start;
        align-items: flex-end;
        gap: 35px;
        display: flex;
        padding: 5px;
        flex-wrap: wrap;
        width: 100%;
      }

      .briefing-container .help-texts {
        min-width: 180px;
        max-width: 250px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 12px;
        display: flex;
        flex: 1 1 auto;
      }

      .briefing-container .help-title {
        align-self: stretch;
        color: #757575;
        font-size: 16px;
        font-family: Inter;
        font-weight: 600;
        line-height: 18.40px;
      }

      .briefing-container .help-paragraph {
        align-self: stretch;
        color: #bdbdbd;
        font-size: 12px;
        font-family: Inter;
        font-weight: 400;
        line-height: 18px;
      }

      .briefing-container .help-button {
        width: auto;
        height: 44px;
        padding: 10px 10px;
        background: linear-gradient(-120deg, rgba(43, 255, 0, 0.096) 0%, #001eff0c 60%);
        box-shadow: 0px -1px 1px rgba(149.97, 160.56, 171.87, 0.12) inset;
        border-radius: 20px;
        outline: 0.50px #ffffff solid;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        display: flex;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
        color: inherit;
      }

      .briefing-container .help-button span {
        font-size: 14px;
        font-weight: 500;
        color: #001aff;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .briefing-container .help-button:hover {
        transform: scale(1.1);
        background: #ffffff;
      }

      .briefing-container .help-button svg {
        width: 17px;
        height: 16px;
      }

      .briefing-container .bottom-divider {
        width: 100%;
        max-width: 348px;
        height: 1px;
        margin: 0 auto;
        position: relative;
        background: #F1F2F9;
        margin-bottom: 15px;
      }

      .briefing-container .section-counter {
        color: #ffffff;
        font-weight: 700;
        font-size: 1.1rem;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      }

      /* Responsividade */
      @media (max-width: 1024px) {
        .briefing-container .main-layout {
          flex-direction: column;
        }
        .briefing-container .sidebar {
          position: relative;
          width: 100%;
          min-width: 100%;
          max-height: none;
          top: 0;
        }
      }

      @media (max-width: 768px) {
        .briefing-container .question-card {
          padding: 25px 20px;
        }
        .briefing-container .navigation {
          flex-direction: column;
          gap: 12px;
        }
        .briefing-container .nav-button {
          width: 100%;
        }
        .briefing-container .info-box {
          max-width: 100%;
          width: 100%;
          padding: 25px 20px;
        }
        .briefing-container .steps-container {
          padding: 18px 16px;
        }
        .briefing-container .step-texts {
          width: calc(100% - 40px);
          max-width: calc(100% - 40px);
        }
      }
    `}</style>
  )
}
