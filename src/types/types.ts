type userType = {
  full_name: string;
  id: number;
  in_game_name: string;
  username: string;
};

type teamMember = {
  member_id: number;
  in_game_name: string;
  role: string;
};

type teamType = {
  creator: number;
  id: number;
  logo: string | null;
  member_count: number;
  name: string;
  status: boolean;
  members: teamMember[];
};
