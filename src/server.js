var express = require ("express");
var bodyParser = ต้องการ ("body-parser");
var mongodb = ต้องการ ("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "ผู้ติดต่อ";

แอป var = express ();
app.use (bodyParser.json ());

// สร้างตัวแปรฐานข้อมูลนอกการติดต่อการเชื่อมต่อฐานข้อมูลเพื่อนำพูลการเชื่อมต่อกลับมาใช้ใหม่ในแอปของคุณ
var db;

// เชื่อมต่อกับฐานข้อมูลก่อนเริ่มต้นแอปพลิเคชันเซิร์ฟเวอร์
mongodb.MongoClient.connect (process.env.MONGODB_URI || "mongodb: // localhost: 27017 / ทดสอบ", ฟังก์ชั่น (err, ไคลเอนต์) {
  ถ้า (ผิดพลาด) {
    console.log (ผิดพลาด);
    process.exit (1);
  }

  // บันทึกวัตถุฐานข้อมูลจากการเรียกกลับเพื่อใช้ซ้ำ
  db = client.db ();
  console.log ("พร้อมเชื่อมต่อฐานข้อมูล");

  // เริ่มต้นแอพ
  var server = app.listen (process.env.PORT || 8080, ฟังก์ชั่น () {
    var port = server.address (). port;
    console.log ("แอปทำงานบนพอร์ต", พอร์ต);
  });
});

// ติดต่อ API วิถีทางด้านล่าง

// ตัวจัดการข้อผิดพลาดทั่วไปที่ใช้โดยจุดปลายทั้งหมด
ฟังก์ชั่น handleError (res, เหตุผล, ข้อความ, รหัส) {
  console.log ("ข้อผิดพลาด:" + เหตุผล);
  res.status (รหัส || 500) .json ({"ผิดพลาด": ข้อความ});
}

/ * "/ api / ที่อยู่ติดต่อ"
 * GET: ค้นหาที่ติดต่อทั้งหมด
 * POST: สร้างผู้ติดต่อใหม่
 * /

app.get ("/ api / รายชื่อผู้ติดต่อ", ฟังก์ชั่น (req, res) {
});

app.post ("/ api / ที่อยู่ติดต่อ", ฟังก์ชัน (req, res) {
});

/ * "/ api / ที่ติดต่อ /: id"
 * GET: ค้นหาผู้ติดต่อด้วย ID
 * PUT: อัปเดตผู้ติดต่อด้วยรหัส
 * DELETE: ลบการติดต่อโดยใช้ ID
 * /

app.get ("/ api / contacts /: id", ฟังก์ชัน (req, res) {
});

app.put ("/ api / contacts /: id", ฟังก์ชัน (req, res) {
});

app.delete ("/ api / ที่ติดต่อ /: id", ฟังก์ชัน (req, res) {
});
var express = require ("express");
var bodyParser = ต้องการ ("body-parser");
var mongodb = ต้องการ ("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "ผู้ติดต่อ";

แอป var = express ();
app.use (bodyParser.json ());

// สร้างตัวแปรฐานข้อมูลนอกการติดต่อการเชื่อมต่อฐานข้อมูลเพื่อนำพูลการเชื่อมต่อกลับมาใช้ใหม่ในแอปของคุณ
var db;

// เชื่อมต่อกับฐานข้อมูลก่อนเริ่มต้นแอปพลิเคชันเซิร์ฟเวอร์
mongodb.MongoClient.connect (process.env.MONGODB_URI || "mongodb: // localhost: 27017 / ทดสอบ", ฟังก์ชั่น (err, ไคลเอนต์) {
  ถ้า (ผิดพลาด) {
    console.log (ผิดพลาด);
    process.exit (1);
  }

  // บันทึกวัตถุฐานข้อมูลจากการเรียกกลับเพื่อใช้ซ้ำ
  db = client.db ();
  console.log ("พร้อมเชื่อมต่อฐานข้อมูล");

  // เริ่มต้นแอพ
  var server = app.listen (process.env.PORT || 8080, ฟังก์ชั่น () {
    var port = server.address (). port;
    console.log ("แอปทำงานบนพอร์ต", พอร์ต);
  });
});

// ติดต่อ API วิถีทางด้านล่าง

// ตัวจัดการข้อผิดพลาดทั่วไปที่ใช้โดยจุดปลายทั้งหมด
ฟังก์ชั่น handleError (res, เหตุผล, ข้อความ, รหัส) {
  console.log ("ข้อผิดพลาด:" + เหตุผล);
  res.status (รหัส || 500) .json ({"ผิดพลาด": ข้อความ});
}

/ * "/ api / ที่อยู่ติดต่อ"
 * GET: ค้นหาที่ติดต่อทั้งหมด
 * POST: สร้างผู้ติดต่อใหม่
 * /

app.get ("/ api / รายชื่อผู้ติดต่อ", ฟังก์ชั่น (req, res) {
  db.collection (CONTACTS_COLLECTION) .find ({}). toArray (ฟังก์ชั่น (ผิดพลาด, เอกสาร) {
    ถ้า (ผิดพลาด) {
      handleError (res, err.message, "ไม่สามารถรับผู้ติดต่อ");
    } อื่น {
      res.status (200) .json (เอกสาร);
    }
  });
});

app.post ("/ api / ที่อยู่ติดต่อ", ฟังก์ชัน (req, res) {
  var newContact = req.body;
  newContact.createDate = new Date ();

  if (! req.body.name) {
    handleError (res, "อินพุตผู้ใช้ไม่ถูกต้อง", "ต้องระบุชื่อ", 400);
  } อื่น {
    db.collection (CONTACTS_COLLECTION) .insertOne (newContact, ฟังก์ชั่น (err, doc) {
      ถ้า (ผิดพลาด) {
        handleError (res, err.message, "ไม่สามารถสร้างผู้ติดต่อใหม่");
      } อื่น {
        res.status (201) .json (doc.ops [0]);
      }
    });
  }
});

/ * "/ api / ที่ติดต่อ /: id"
 * GET: ค้นหาผู้ติดต่อด้วย ID
 * PUT: อัปเดตผู้ติดต่อด้วยรหัส
 * DELETE: ลบการติดต่อโดยใช้ ID
 * /

app.get ("/ api / contacts /: id", ฟังก์ชัน (req, res) {
  db.collection (CONTACTS_COLLECTION) .findOne ({_id: ใหม่ ObjectID (req.params.id)}, ฟังก์ชัน (err, doc) {
    ถ้า (ผิดพลาด) {
      handleError (res, err.message, "ไม่สามารถรับการติดต่อ");
    } อื่น {
      res.status (200) .json (doc);
    }
  });
});

app.put ("/ api / contacts /: id", ฟังก์ชัน (req, res) {
  var updateDoc = req.body;
  ลบ updateDoc._id;

  db.collection (CONTACTS_COLLECTION) .updateOne ({_ id: ใหม่ ObjectID (req.params.id)}, updateDoc, ฟังก์ชั่น (ผิดพลาด, doc) {
    ถ้า (ผิดพลาด) {
      handleError (res, err.message, "ไม่สามารถอัปเดตที่อยู่ติดต่อ");
    } อื่น {
      updateDoc._id = req.params.id;
      res.status (200) .json (updateDoc);
    }
  });
});

app.delete ("/ api / ที่ติดต่อ /: id", ฟังก์ชัน (req, res) {
  db.collection (CONTACTS_COLLECTION) .deleteOne ({_ id: ใหม่ ObjectID (req.params.id)}, ฟังก์ชัน (ข้อผิดพลาด, ผลลัพธ์) {
    ถ้า (ผิดพลาด) {
      handleError (res, err.message, "ไม่สามารถลบผู้ติดต่อ");
    } อื่น {
      res.status (200) .json (req.params.id);
    }
  });
});
