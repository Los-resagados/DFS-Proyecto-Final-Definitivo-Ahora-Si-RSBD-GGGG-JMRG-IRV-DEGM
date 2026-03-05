require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const seedEditors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB');

    // Crear editores de prueba
    const editors = [
      {
        username: 'editor1',
        email: 'editor1@sega.com',
        password: 'editor123',
        role: 'editor'
      },
      {
        username: 'editor2',
        email: 'editor2@sega.com',
        password: 'editor123',
        role: 'editor'
      },
      {
        username: 'editor3',
        email: 'editor3@sega.com',
        password: 'editor123',
        role: 'editor'
      }
    ];

    for (const editorData of editors) {
      const existingUser = await User.findOne({ email: editorData.email });
      
      if (existingUser) {
        console.log(`⚠️  El editor ${editorData.username} ya existe`);
      } else {
        const editor = new User(editorData);
        await editor.save();
        console.log(`✅ Editor creado: ${editorData.username} (${editorData.email})`);
      }
    }

    console.log('\n🎉 ¡Editores de prueba creados exitosamente!');
    console.log('\nCredenciales de acceso:');
    console.log('Email: editor1@sega.com / Password: editor123');
    console.log('Email: editor2@sega.com / Password: editor123');
    console.log('Email: editor3@sega.com / Password: editor123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedEditors();
