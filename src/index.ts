นำเข้า {prisma} จาก './generated/prisma-client'

// ฟังก์ชั่น `main` เพื่อให้เราสามารถใช้ async / await
ฟังก์ชัน async main () {
  // สร้างผู้ใช้ใหม่ที่ชื่อว่า 'Alice'
  const newUser = คอย prisma.createUser ({ชื่อ: 'Alice'})
  console.log (`ผู้ใช้ใหม่ที่สร้าง: $ {newUser.name} (ID: $ {newUser.id})`)

  // อ่านผู้ใช้ทั้งหมดจากฐานข้อมูลและพิมพ์ไปยังคอนโซล
  const allUsers = คอย prisma.users ()
  console.log (ALLUSERS)
}

main (). catch (e => console.error (e))
