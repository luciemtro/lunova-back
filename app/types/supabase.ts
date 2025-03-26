export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      chat_messages: {
        Row: {
          channel_id: string | null;
          content: string | null;
          created_at: string | null;
          expires_at: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          channel_id?: string | null;
          content?: string | null;
          created_at?: string | null;
          expires_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Update: {
          channel_id?: string | null;
          content?: string | null;
          created_at?: string | null;
          expires_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "chat_messages_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      emotion_logs: {
        Row: {
          color: string | null;
          created_at: string | null;
          emotion_id: string | null;
          id: string;
          intensity: number | null;
          sub_emotions: Json | null;
          user_id: string | null;
        };
        Insert: {
          color?: string | null;
          created_at?: string | null;
          emotion_id?: string | null;
          id?: string;
          intensity?: number | null;
          sub_emotions?: Json | null;
          user_id?: string | null;
        };
        Update: {
          color?: string | null;
          created_at?: string | null;
          emotion_id?: string | null;
          id?: string;
          intensity?: number | null;
          sub_emotions?: Json | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "emotion_logs_emotion_id_fkey";
            columns: ["emotion_id"];
            isOneToOne: false;
            referencedRelation: "emotions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "emotion_logs_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      emotions: {
        Row: {
          category: string | null;
          color_code: string | null;
          description: string | null;
          id: string;
          is_positive: boolean | null;
          label: string | null;
        };
        Insert: {
          category?: string | null;
          color_code?: string | null;
          description?: string | null;
          id?: string;
          is_positive?: boolean | null;
          label?: string | null;
        };
        Update: {
          category?: string | null;
          color_code?: string | null;
          description?: string | null;
          id?: string;
          is_positive?: boolean | null;
          label?: string | null;
        };
        Relationships: [];
      };
      exploration_responses: {
        Row: {
          created_at: string | null;
          id: string;
          responses: Json | null;
          suggested_emotion_id: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          responses?: Json | null;
          suggested_emotion_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          responses?: Json | null;
          suggested_emotion_id?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "exploration_responses_suggested_emotion_id_fkey";
            columns: ["suggested_emotion_id"];
            isOneToOne: false;
            referencedRelation: "emotions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "exploration_responses_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      goal_reactions: {
        Row: {
          created_at: string | null;
          from_user_id: string | null;
          goal_id: string | null;
          id: string;
          type: string | null;
        };
        Insert: {
          created_at?: string | null;
          from_user_id?: string | null;
          goal_id?: string | null;
          id?: string;
          type?: string | null;
        };
        Update: {
          created_at?: string | null;
          from_user_id?: string | null;
          goal_id?: string | null;
          id?: string;
          type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "goal_reactions_from_user_id_fkey";
            columns: ["from_user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "goal_reactions_goal_id_fkey";
            columns: ["goal_id"];
            isOneToOne: false;
            referencedRelation: "goals";
            referencedColumns: ["id"];
          }
        ];
      };
      goals: {
        Row: {
          can_be_cheered: boolean | null;
          created_at: string | null;
          description: string | null;
          emotion_link: string | null;
          id: string;
          is_completed: boolean | null;
          is_custom: boolean | null;
          is_public: boolean | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          can_be_cheered?: boolean | null;
          created_at?: string | null;
          description?: string | null;
          emotion_link?: string | null;
          id?: string;
          is_completed?: boolean | null;
          is_custom?: boolean | null;
          is_public?: boolean | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          can_be_cheered?: boolean | null;
          created_at?: string | null;
          description?: string | null;
          emotion_link?: string | null;
          id?: string;
          is_completed?: boolean | null;
          is_custom?: boolean | null;
          is_public?: boolean | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "goals_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      journal_entries: {
        Row: {
          color: string | null;
          content: string | null;
          created_at: string | null;
          emotion_id: string | null;
          id: string;
          is_important: boolean | null;
          user_id: string | null;
        };
        Insert: {
          color?: string | null;
          content?: string | null;
          created_at?: string | null;
          emotion_id?: string | null;
          id?: string;
          is_important?: boolean | null;
          user_id?: string | null;
        };
        Update: {
          color?: string | null;
          content?: string | null;
          created_at?: string | null;
          emotion_id?: string | null;
          id?: string;
          is_important?: boolean | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "journal_entries_emotion_id_fkey";
            columns: ["emotion_id"];
            isOneToOne: false;
            referencedRelation: "emotions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "journal_entries_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      private_messages: {
        Row: {
          content: string | null;
          created_at: string | null;
          id: string;
          read: boolean | null;
          receiver_id: string | null;
          sender_id: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string | null;
          id?: string;
          read?: boolean | null;
          receiver_id?: string | null;
          sender_id?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string | null;
          id?: string;
          read?: boolean | null;
          receiver_id?: string | null;
          sender_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "private_messages_receiver_id_fkey";
            columns: ["receiver_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "private_messages_sender_id_fkey";
            columns: ["sender_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          aura: string | null;
          bio: string | null;
          created_at: string | null;
          id: string;
          is_public: boolean | null;
          username: string | null;
        };
        Insert: {
          aura?: string | null;
          bio?: string | null;
          created_at?: string | null;
          id: string;
          is_public?: boolean | null;
          username?: string | null;
        };
        Update: {
          aura?: string | null;
          bio?: string | null;
          created_at?: string | null;
          id?: string;
          is_public?: boolean | null;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
