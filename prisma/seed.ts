import { PrismaClient, Role, LeadStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@expertrockwealth.com' },
    update: {},
    create: {
      email: 'admin@expertrockwealth.com',
      name: 'Admin User',
      role: Role.ADMIN,
      emailVerified: new Date(),
    },
  });

  console.log('✅ Created admin user:', adminUser.email);

  // Create sample leads
  const sampleLeads = [
    {
      name: 'Ahmed Al-Rashid',
      email: 'ahmed@example.com',
      phone: '+971501234567',
      company: 'Al-Rashid Trading',
      services: ['uae-residency', 'business-startup', 'banking'],
      budgetMin: 50000,
      budgetMax: 100000,
      timeline: '3-6 months',
      notes: 'Looking to setup mainland LLC with 2 partners',
      source: 'website',
      locale: 'en',
      status: LeadStatus.NEW,
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1234567890',
      company: 'Johnson Consulting',
      services: ['freezone-mainland', 'wealth-management'],
      budgetMin: 75000,
      budgetMax: 150000,
      timeline: '1-3 months',
      notes: 'International consultant seeking DIFC setup',
      source: 'referral',
      locale: 'en',
      status: LeadStatus.QUALIFIED,
    },
    {
      name: 'محمد عبدالله',
      email: 'mohammed@example.com',
      phone: '+971507654321',
      company: 'عبدالله للاستثمار',
      services: ['property-search', 'tax-efficiency'],
      budgetMin: 100000,
      budgetMax: 200000,
      timeline: '6+ months',
      notes: 'يبحث عن عقارات تجارية في دبي',
      source: 'website',
      locale: 'ar',
      status: LeadStatus.NEW,
    },
  ];

  for (const leadData of sampleLeads) {
    const lead = await prisma.lead.create({
      data: leadData,
    });
    console.log('✅ Created sample lead:', lead.name);
  }

  // Create sample event logs
  const sampleEvents = [
    {
      type: 'calculator_use',
      payload: {
        jurisdiction: 'dubai-mainland',
        companyType: 'llc',
        shareholders: 2,
        estimatedCost: 45000,
      },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      ipHash: 'hash_192.168.1.1',
    },
    {
      type: 'page_view',
      payload: {
        page: '/services/uae-residency',
        referrer: 'https://google.com',
        sessionId: 'session_123',
      },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X)',
      ipHash: 'hash_10.0.0.1',
    },
    {
      type: 'form_submit',
      payload: {
        form: 'contact',
        fields: ['name', 'email', 'services'],
        success: true,
      },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      ipHash: 'hash_172.16.0.1',
    },
  ];

  for (const eventData of sampleEvents) {
    const event = await prisma.eventLog.create({
      data: eventData,
    });
    console.log('✅ Created sample event log:', event.type);
  }

  // Create newsletter subscribers
  const sampleSubscribers = [
    {
      email: 'subscriber1@example.com',
      consent: true,
    },
    {
      email: 'subscriber2@example.com',
      consent: true,
    },
    {
      email: 'info@businessexample.com',
      consent: true,
    },
  ];

  for (const subscriberData of sampleSubscribers) {
    const subscriber = await prisma.newsletterSubscriber.create({
      data: subscriberData,
    });
    console.log('✅ Created sample subscriber:', subscriber.email);
  }

  // Create contact messages
  const sampleMessages = [
    {
      name: 'David Chen',
      email: 'david@example.com',
      message: 'I need help setting up a freezone company in Dubai. Can we schedule a call?',
    },
    {
      name: 'Lisa Thompson',
      email: 'lisa@example.com',
      message: 'What are the requirements for UAE golden visa? I have been living in Dubai for 3 years.',
    },
  ];

  for (const messageData of sampleMessages) {
    const message = await prisma.contactMessage.create({
      data: messageData,
    });
    console.log('✅ Created sample message from:', message.name);
  }

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });