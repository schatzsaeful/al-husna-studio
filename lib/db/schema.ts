import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// 1. Studio Templates Showcase Schema
export const studioTemplates = sqliteTable("studio_templates", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(), // 'landing-page' | 'company-profile' | 'education' | 'ecommerce' | 'saas' | 'portfolio'
  thumbnailUrl: text("thumbnail_url").notNull(),
  demoUrl: text("demo_url").notNull(),
  description: text("description").notNull(),
  features: text("features"), // JSON array string
  isFeatured: integer("is_featured", { mode: "boolean" }).default(false),
  priceEstimate: text("price_estimate"),
  createdAt: text("created_at").notNull(),
});

// 2. Studio Consultation & Lead Inquiries Schema
export const studioLeads = sqliteTable("studio_leads", {
  id: text("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientPhone: text("client_phone").notNull(),
  selectedTemplateSlug: text("selected_template_slug"),
  selectedPackage: text("selected_package"),
  projectBrief: text("project_brief"),
  status: text("status").default("new"), // 'new' | 'contacted' | 'deal' | 'archived'
  createdAt: text("created_at").notNull(),
});
