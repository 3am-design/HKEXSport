"use client";
import InnerHead from "@/app/common/InnerHead";
import InnerTextarea from "@/app/common/InnerTextarea";

import { useGlobalContext } from "@/app/GlobalContext";
export default function TermsOfUse() {
  const { state } = useGlobalContext();

  return (
    <>
      <InnerHead title={state.lang === "en" ? "Terms of Use" : "使用條款" } />
      <InnerTextarea>
        {
          {
            en: (
              <>
                <h2>Agreement to Terms</h2>
                <p>Welcome to the HKEX Family Sports Day website. By accessing and using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this website.</p>
                <h2>Intellectual Property Rights</h2>
                <p>All content on this website, including text, logos, graphics, and images, is the property of HKEX and is protected by copyright laws. You may not copy, reproduce, or use our content without our express written permission.</p>
                <h2>Acceptable Use/Prohibited Conduct</h2>
                <p>You agree to use this website only for its intended purpose. You must not use this website for any illegal activities, to upload malicious software, to collect data from other users, or to post content that is offensive, harassing, or defamatory.</p>
                <h2>Disclaimer of Warranties</h2>
                <p>This website is provided on an “as is” basis. While we strive to ensure the information is accurate and the site is available, we do not guarantee that it will be free from errors or uninterrupted at all times. Your use of this website is at your own risk.</p>
                <h2>Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, HKEX will not be liable for any damages that may arise from your use of this website. This does not affect our liability for the HKEX Family Sports Day event itself, which is covered separately during registration.</p>
                <h2>Termination Clause</h2>
                <p>We reserve the right to block or terminate your access to this website at any time without notice if you violate these Terms of Use.</p>
                <h2>Links to Third-Party Websites</h2>
                <p>This website may contain links to websites operated by third parties, including those who assist us in organising the event. We are not responsible for the content or privacy practices of these external websites. We encourage you to review their relevant terms and policies as well.</p>
                <h2>Accessibility Statement</h2>
                <p>We are committed to making this website accessible to all participants, including people with disabilities. This website is therefore designed to be usable by most people with special needs. Our accessibility features include compatibility with common screen readers, full keyboard navigation, and the use of standardized style sheets to ensure consistent user experience. We are continually working to improve the accessibility of our website. If you encounter any difficulties accessing information on this website, please contact us at events@yello-marketing.com so we can assist you and make necessary improvements.</p>
                <h2>Governing Language</h2>
                <p>These Terms of Use and related notices are provided in both English and Chinese. In the event of any discrepancy or inconsistency between the English and Chinese versions, the English version shall prevail.</p>
                <h2>Governing Law</h2>
                <p>These Terms of Use and any dispute arising from your use of this website shall be governed by and interpreted in accordance with the laws of the Hong Kong Special Administrative Region.</p>
              </>
            ),
            zh: (
              <>
                <h2>使用條款同意</h2>
                <p>歡迎使用香港交易所家庭運動日網站。使用及瀏覽本網站即表示你同意受本使用條款的約束。如你不同意任何條款內容，請勿使用本網站。</p>
                <h2>知識產權</h2>
                <p>本網站所有內容，包括文字、標誌、照片及圖片，均為香港交易所所有，受版權法保護。未經本公司明確書面許可，不得複製、重製或使用本網站內容。</p>
                <h2>可接受使用／禁止行為</h2>
                <p>你同意僅以本網站的既定用途使用網站。你不得利用本網站從事任何非法活動、上傳惡意軟件、收集其他用戶資料，或發布具冒犯性、騷擾性或誹謗性的內容。</p>
                <h2>免責聲明</h2>
                <p>本網站以「現況」提供。雖然我們致力確保資訊準確及網站可正常使用，但並不保證網站資料或任何服務的使用不會受阻或準確無誤。使用本網站的風險由使用者自行承擔。</p>
                <h2>責任限制</h2>
                <p>在法律允許的最大範圍內，香港交易所對於因使用本網站可能引致的任何損失或損害概不負責。此條款不影響香港交易所對「香港交易所家庭運動日 2026」活動本身的責任，該責任已於報名時另行列明。</p>
                <h2>終止條款</h2>
                <p>若你違反本使用條款，我們保留隨時終止或限制你訪問本網站的權利，且無需另行通知。</p>
                <h2>第三方網站連結</h2>
                <p>本網站可能包含由第三方（包括協助我們組織活動的第三方）經營的網站連結。我們對該等外部網站的內容及隱私政策不承擔任何責任，建議你亦查閱其相關條款及政策。</p>
                <h2>無障礙聲明</h2>
                <p>我們致力確保本網站對所有參加者均可使用，包括殘疾人士。因此，本網站設計旨在讓大多數有特殊需要的人士也能順利使用。我們的無障礙功能包括與常用螢幕閱讀器相容、完整鍵盤操作，以及採用標準化樣式表以確保一致的使用體驗。我們持續改進網站的無障礙功能。如你在使用本網站時遇到任何困難，請聯絡我們 <a href="mailto:events@yello-marketing.com">events@yello-marketing.com</a>，以便我們協助你並進行必要改進。</p>
                <h2>使用語言</h2>
                <p>本使用條款及相關通知提供英文及中文版本。英文版本與中文版本之間若有歧義或不符，概以英文版本為準。</p>
                <h2>管轄法律</h2>
                <p>本使用條款及因你使用本網站而產生的任何爭議，均受香港特別行政區法律管轄並據之詮釋。</p>
              </>
            )
          }[state.lang]
        }
      </InnerTextarea>
    </>
  );
}
