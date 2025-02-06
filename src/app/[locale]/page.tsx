import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] mx-96 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-15 dark:text-white">
          Radar DR-172ADV Software Document
        </h1>
        <div className="mb-8">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
            <strong>Radar Display Unit</strong> (Air Situation Display: ADS) designed
            for military air defense systems. The aim is to enhance the data
            processing and air situation display towards standardized production and
            meet the IEEE 25010 standard. This unit is intended to replace a
            previously failed system, restoring full operational capabilities, and
            introducing new functionalities for real-time, reliable, and secure radar
            data visualization.
          </p>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-15 dark:text-white">
          เอกสารซอฟต์แวร์เรดาร์ DR-172ADV
        </h1>
        <div className="mb-8">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
            <strong>หน่วยแสดงผลเรดาร์</strong> (การแสดงสถานการณ์ทางอากาศ: ADS) ออกแบบมาสำหรับระบบป้องกันภัยทางอากาศทางทหาร มีวัตถุประสงค์เพื่อเพิ่มประสิทธิภาพการประมวลผลข้อมูลและการแสดงสถานการณ์ทางอากาศเพื่อการผลิตที่เป็นมาตรฐานและเป็นไปตามมาตรฐาน IEEE 25010 หน่วยนี้มีวัตถุประสงค์เพื่อทดแทนระบบที่ล้มเหลวก่อนหน้านี้ โดยกลับคืนความสามารถในการปฏิบัติงานอย่างเต็มรูปแบบ และแนะนำฟังก์ชันการทำงานใหม่สำหรับการแสดงผลข้อมูลเรดาร์แบบเรียลไทม์ที่เชื่อถือได้และปลอดภัย
          </p>
        </div>
      </main>
    </div>
  );
}
