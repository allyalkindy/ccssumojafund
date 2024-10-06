import React from "react";
import {
  FaUsers,
  FaMoneyBill,
  FaClipboardCheck,
  FaExclamationCircle,
  FaArrowRight,
} from "react-icons/fa";

const RulesPage = () => {
  return (
    <div
      id="rules"
      className="h-auto flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 p-6"
    >
      <h1 className="text-4xl leading-loose text-white font-bold mb-8 text-center">
        Rules of <br /> UMOJA FUND
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-start p-6 rounded-lg shadow-lg bg-blue-600">
          <div className="flex items-center mb-4">
            <FaUsers className="text-4xl text-white" />
            <h2 className="text-xl text-white font-semibold ml-2">
              UMOJA FUND 💶
            </h2>
          </div>
          <p className="text-white">
            Ni mfuko wa dharura (maafa na sherehe) ulioanzishwa na wanafunzi
            wahitimu wa CCSS 2019. Lengo kubwa ni kuimarisha umoja na
            mashirikiano miongoni mwa wanafunzi wa CCSS kwani mfuko huu
            unajumuisha wanafunzi wote waliomaliza CCSS na si tu wa 2019.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start p-6 rounded-lg shadow-lg bg-blue-600 h-auto">
          <div className="flex items-center mb-4">
            <FaClipboardCheck className="text-4xl text-white" />
            <h2 className="text-xl text-white font-semibold ml-2">
              NAMNA YA KUJIUNGA
            </h2>
          </div>
          <p className="text-white">
            1. Mwanafunzi yeyote aliemaliza CCSS mwaka wowote anaweza kujinga mfano
            amehitimu (2018,2019,2020.....) Mwanafunzi huyo atatakiwa kujiunga
            kwa kulipia kwanza hela anayostahiki kulipia <br className="mb-3" />
            2. Endapo mwanafunzi huyo atajiunga katika awamu ya kwanza ya mwaka
            (Mwez 1-6) mwanafunzi atatakiwa kulipia kuanzia mwezi wa kwanza
            (Jan) na ikiwa atajinga awamu ya pili ya mwaka (Mwez wa 7-12)
            mwanafunzi atatakiwa kulipia kuanzia mwezi wa saba (July) na
            kuaendelea.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start p-6 rounded-lg shadow-lg bg-blue-600">
          <div className="flex items-center mb-4">
            <FaExclamationCircle className="text-4xl text-white" />
            <h2 className="text-xl text-white font-semibold ml-2">
              MCHANGANUO WA WANUFAIKA
            </h2>
          </div>
          <p className="text-white">
            1. Atakaefiwa na Baba/Mama mzazi <br /> 2. Atakaepatwa na ugonjwa mkubwa *
            Atakaeowa ama kuolewa * Atakaetangulia mbele ya haki
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start p-6 rounded-lg shadow-lg bg-blue-600">
          <div className="flex items-center mb-4">
            <FaMoneyBill className="text-4xl text-white" />
            <h2 className="text-xl text-white font-semibold ml-2">
              KUHUSU MICHANGO
            </h2>
          </div>
          <p className="text-white">
            Mwanachama wowote anapaswa kuchangia kiasi cha 2000/= tu kwa kila
            mwezi na hatoruhusika kukaa na deni hata la mwezi mmoja nyuma. NB:
            Mwanachama atakapofikisha miezi sita (6) bila ya kulipia atakuwa
            moja kwa moja ameshajitoa mwenyewe kwenye mfuko na hapo ndipo
            utafikia ukomo wa uwanachama wake. Namba ya kuchangia 0673126659
            Jina Omar Ali.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
